import { writeFile } from "node:fs/promises";

const USER = "ishanbrar";

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "portfolio-sync-script" },
  });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

function pickRepo(r) {
  return {
    name: r.name,
    full_name: r.full_name,
    html_url: r.html_url,
    description: r.description,
    homepage: r.homepage,
    language: r.language,
    fork: r.fork,
    archived: r.archived,
    visibility: r.visibility,
    stargazers_count: r.stargazers_count,
    watchers_count: r.watchers_count,
    forks_count: r.forks_count,
    open_issues_count: r.open_issues_count,
    created_at: r.created_at,
    updated_at: r.updated_at,
    pushed_at: r.pushed_at,
    topics: r.topics ?? [],
  };
}

async function main() {
  const repos = await fetchJson(
    `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`,
  );
  const payload = {
    user: USER,
    fetched_at: new Date().toISOString(),
    count: repos.length,
    repos: repos.map(pickRepo),
  };

  await writeFile(
    new URL("../src/data/github-repos.json", import.meta.url),
    JSON.stringify(payload, null, 2) + "\n",
    "utf8",
  );

  console.log(`Wrote ${payload.count} repos to src/data/github-repos.json`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
