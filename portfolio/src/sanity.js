import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "4pfccnqa", // Replace with your actual Project ID
  dataset: "production",
  useCdn: true, // `false` if you want to always fetch the latest
  apiVersion: "2023-01-01",
});
