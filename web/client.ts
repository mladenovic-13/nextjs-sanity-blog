import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "kt4y2u8n", // you can find this in sanity.json
  apiVersion: "2022-08-18",
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});
