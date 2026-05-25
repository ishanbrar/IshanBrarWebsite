/** Canonical production URL — used when env is missing or invalid. */
export const productionSiteUrl = "https://www.ishanbrar.com";

function normalizeSiteUrl(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function isValidSiteUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "NEXT_PUBLIC_SITE_URL" || trimmed === "SITE_URL") {
    return false;
  }
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;
  if (fromEnv && isValidSiteUrl(fromEnv)) {
    return normalizeSiteUrl(fromEnv.trim());
  }
  if (process.env.NODE_ENV === "production") return productionSiteUrl;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
