import { createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "qjzasttk",
  dataset: "production",
  apiVersion: "2025-04-01",
  useCdn: false,
};

const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;