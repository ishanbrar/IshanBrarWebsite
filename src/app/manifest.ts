import type { MetadataRoute } from "next";
import { siteDescription, siteTitle } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteTitle,
    short_name: "Ishan Brar",
    description: siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f5efe8",
    theme_color: "#f5efe8",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    id: siteUrl,
  };
}
