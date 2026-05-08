import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

async function main() {
  const targets = [
    {
      slug: "mapper",
      baseUrl: "http://localhost:3010",
      shots: [
        { path: "/", out: "01-home.png" },
        { path: "/tables", out: "02-tables.png" },
        { path: "/mapper-embed", out: "03-embed.png" },
      ],
    },
    {
      slug: "ethnic-mapper",
      baseUrl: "http://localhost:3020",
      shots: [
        { path: "/", out: "01-home.png" },
        { path: "/tables", out: "02-tables.png" },
        { path: "/mapper-embed", out: "03-embed.png" },
      ],
    },
    {
      slug: "mymini",
      baseUrl: "http://localhost:3030",
      shots: [
        { path: "/login", out: "01-login.png" },
        { path: "/signup", out: "02-signup.png" },
        { path: "/puzzles", out: "03-puzzles.png" },
      ],
    },
  ];

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  const manifest = {};

  for (const t of targets) {
    const dir = new URL(`../public/projects/${t.slug}/`, import.meta.url);
    // ensure exists even when running from different cwd
    await mkdir(dir, { recursive: true });
    manifest[t.slug] = [];

    for (const s of t.shots) {
      const url = new URL(s.path, t.baseUrl).toString();
      console.log(`Capturing ${url}`);
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(750);
      const outPath = new URL(s.out, dir);
      await page.screenshot({ path: fileURLToPath(outPath), fullPage: true });
      manifest[t.slug].push(`/projects/${t.slug}/${s.out}`);
    }
  }

  await writeFile(
    new URL("../src/data/generated-screenshots.json", import.meta.url),
    JSON.stringify(manifest, null, 2) + "\n",
    "utf8",
  );

  await browser.close();
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
