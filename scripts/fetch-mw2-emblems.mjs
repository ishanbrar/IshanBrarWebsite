import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "emblems", "mw2");
const manifestPath = path.join(root, "src", "data", "mw2-emblems.json");

const FANDOM_PAGE =
  "https://callofduty.fandom.com/wiki/Emblems/Call_of_Duty:_Modern_Warfare_2";

async function scrapeUrls() {
  const res = await fetch(FANDOM_PAGE, {
    headers: { "User-Agent": "IshanBrarPortfolio/1.0 (educational)" },
  });
  const html = await res.text();
  const re =
    /https:\/\/static\.wikia\.nocookie\.net\/callofduty\/images\/[a-f0-9]\/[a-f0-9]{2}\/[^"'\\]+\.png/gi;
  const found = [...html.matchAll(re)]
    .map((m) => m[0])
    .filter((u) => /Emblem_MW2\.png$/i.test(u) || /emblem_MW2\.png$/i.test(u));
  return [...new Set(found)];
}

async function download(url, dest) {
  const full = `${url}/revision/latest`;
  const res = await fetch(full, {
    headers: { "User-Agent": "IshanBrarPortfolio/1.0 (educational)" },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  let urls = await scrapeUrls();
  if (urls.length < 10) {
    const backup = fs.readFileSync(
      "/Users/jarjar/.cursor/projects/Users-jarjar-Documents-IshanBrarWebsite/agent-tools/91d619d9-8ac0-4a1d-84b4-b62cd2a4ba73.txt",
      "utf8",
    );
    const re =
      /https:\/\/static\.wikia\.nocookie\.net\/callofduty\/images\/[a-f0-9]\/[a-f0-9]{2}\/[^"\s]+\.png/gi;
    urls = [...new Set([...backup.matchAll(re)].map((m) => m[0]))].filter((u) =>
      /Emblem_MW2\.png$/i.test(u),
    );
  }

  const manifest = [];
  for (const url of urls) {
    const name = url.split("/").pop().replace(/\.png$/i, "");
    const file = `${name}.png`;
    const dest = path.join(outDir, file);
    try {
      await download(url, dest);
      manifest.push({ id: name, src: `/emblems/mw2/${file}` });
      process.stdout.write(".");
    } catch (e) {
      console.warn("\nSkip", name, e.message);
    }
  }
  console.log(`\n${manifest.length} emblems`);
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
