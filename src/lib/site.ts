function normalizeSiteUrl(value?: string) {
  if (!value) return "http://localhost:3000";
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL,
);
