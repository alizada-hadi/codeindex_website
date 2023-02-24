import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "uz6w69s9",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token:
    "skXFSzi44ZocUlrjCYLV3mqf2eKIdElaBqv4XgLmgGgqs130YdmVeF25nrFbSQhbDLM13zBAcK2TFnAkjw5zbTN6aqgnnWZZOgCKZ9JqXLyqTVomob67CKqmFTBfRQFpJcwm8UyoSph33YPOlohVCDIDTgT7ibXGtzjvIYeYnsnCy0Yars9v",
});

export const urlFor = (source) => createImageUrlBuilder(client).image(source);
