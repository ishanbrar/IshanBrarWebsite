import { spawn } from "node:child_process";
import { mkdir, rm, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, "..");
const shotsRoot = path.join(siteRoot, "public", "projects");
const derivedDataRoot = path.join(siteRoot, ".tmp", "ios-derived-data");

const apps = {
  punjabitutor: {
    kind: "ui-test",
    slug: "punjabitutor",
    projectDir: "/Users/jarjar/Documents/PunjabiTutor/punjabi-tutor/ios",
    project: "/Users/jarjar/Documents/PunjabiTutor/punjabi-tutor/ios/PunjabiTutorApp.xcodeproj",
    scheme: "PunjabiTutorApp",
    testTarget:
      "PunjabiTutorAppUITests/PunjabiTutorScreenshotsUITests/testCaptureScreens",
    bundleId: "com.ishanbrar.PunjabiTutorApp",
  },
  trivia: {
    kind: "launch-shot",
    slug: "trivia",
    projectDir: "/Users/jarjar/Documents/Trivia",
    project: "/Users/jarjar/Documents/Trivia/TriviaApp.xcodeproj",
    scheme: "TriviaApp",
    bundleId: "com.ishanbrar.triviaapp",
    shots: [
      { out: "01-auth.png", delayMs: 2500 },
      { out: "02-auth-close.png", delayMs: 4500 },
    ],
  },
  cornerapp: {
    kind: "launch-shot",
    slug: "cornerapp",
    projectDir: "/Users/jarjar/Documents/CornerApp",
    project: "/Users/jarjar/Documents/CornerApp/CornerApp.xcodeproj",
    scheme: "CornerApp",
    bundleId: "com.ishanbrar.CornerApp",
    shots: [
      { out: "01-splash.png", delayMs: 800 },
      { out: "02-auth.png", delayMs: 3200 },
    ],
  },
};

function parseArgs(argv) {
  const selected = new Set();
  let device = process.env.IOS_SIMULATOR_NAME || "iPhone 16";

  for (const arg of argv) {
    if (arg.startsWith("--app=")) {
      selected.add(arg.slice("--app=".length).toLowerCase());
    } else if (arg.startsWith("--device=")) {
      device = arg.slice("--device=".length);
    }
  }

  const appNames = selected.size > 0 ? [...selected] : Object.keys(apps);
  return { appNames, device };
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      env: { ...process.env, ...(options.env ?? {}) },
      stdio: options.stdio ?? "inherit",
    });

    let stdout = "";
    let stderr = "";

    if (child.stdout) {
      child.stdout.on("data", (chunk) => {
        stdout += chunk.toString();
      });
    }

    if (child.stderr) {
      child.stderr.on("data", (chunk) => {
        stderr += chunk.toString();
      });
    }

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
        return;
      }
      reject(
        new Error(
          `${command} ${args.join(" ")} exited with code ${code}\n${stderr || stdout}`,
        ),
      );
    });
  });
}

async function ensureExists(targetPath) {
  try {
    await access(targetPath);
  } catch {
    throw new Error(`Missing required path: ${targetPath}`);
  }
}

async function bootSimulator(device) {
  await run("xcrun", ["simctl", "boot", device]).catch(() => {});
  await run("xcrun", ["simctl", "bootstatus", device, "-b"]);
}

async function shutdownSimulator(device) {
  await run("xcrun", ["simctl", "shutdown", device]).catch(() => {});
}

async function captureWithUITest(config, device) {
  const outputDir = path.join(shotsRoot, config.slug);
  const derivedDataPath = path.join(derivedDataRoot, config.slug);

  await mkdir(outputDir, { recursive: true });
  await rm(derivedDataPath, { recursive: true, force: true });
  await bootSimulator(device);

  await run(
    "xcodebuild",
    [
      "test",
      "-project",
      config.project,
      "-scheme",
      config.scheme,
      "-destination",
      `platform=iOS Simulator,name=${device}`,
      "-derivedDataPath",
      derivedDataPath,
      "-only-testing:" + config.testTarget,
    ],
    {
      cwd: config.projectDir,
      env: {
        SCREENSHOT_DIR: outputDir,
      },
    },
  );
}

async function buildApp(config, device) {
  const derivedDataPath = path.join(derivedDataRoot, config.slug);
  await rm(derivedDataPath, { recursive: true, force: true });

  await run(
    "xcodebuild",
    [
      "build",
      "-project",
      config.project,
      "-scheme",
      config.scheme,
      "-destination",
      `platform=iOS Simulator,name=${device}`,
      "-derivedDataPath",
      derivedDataPath,
    ],
    {
      cwd: config.projectDir,
    },
  );

  const appPath = path.join(
    derivedDataPath,
    "Build",
    "Products",
    "Debug-iphonesimulator",
    `${config.scheme}.app`,
  );
  await ensureExists(appPath);
  return appPath;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function captureLaunchShots(config, device) {
  const outputDir = path.join(shotsRoot, config.slug);
  await mkdir(outputDir, { recursive: true });
  await bootSimulator(device);

  const appPath = await buildApp(config, device);
  await run("xcrun", ["simctl", "install", device, appPath]);
  await run("xcrun", ["simctl", "terminate", device, config.bundleId]).catch(
    () => {},
  );
  await run("xcrun", ["simctl", "launch", device, config.bundleId]);

  for (const shot of config.shots) {
    await wait(shot.delayMs);
    await run("xcrun", [
      "simctl",
      "io",
      device,
      "screenshot",
      path.join(outputDir, shot.out),
    ]);
  }
}

async function main() {
  const { appNames, device } = parseArgs(process.argv.slice(2));
  await mkdir(shotsRoot, { recursive: true });
  await mkdir(derivedDataRoot, { recursive: true });

  for (const name of appNames) {
    const config = apps[name];
    if (!config) {
      throw new Error(`Unknown app '${name}'. Expected one of: ${Object.keys(apps).join(", ")}`);
    }

    console.log(`\n=== Capturing ${config.slug} on ${device} ===`);

    if (config.kind === "ui-test") {
      await captureWithUITest(config, device);
    } else {
      await captureLaunchShots(config, device);
    }
  }

  console.log("\nDone. Screenshots written under public/projects/<slug>/");
}

main()
  .catch(async (error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(async () => {
    const device = process.env.IOS_SIMULATOR_NAME || "iPhone 16";
    await shutdownSimulator(device);
  });
