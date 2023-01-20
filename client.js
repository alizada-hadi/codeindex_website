import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token: process.env.NEXT_PUBLICH_SANITY_TOKEN_KEY,
});

export const urlFor = (source) => createImageUrlBuilder(client).image(source);
