import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "./env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function sanityFetch({ query, queryParams, tags }) {
  return client.fetch(query, queryParams, {
    next: { tags, revalidate: 300 },
  });
}
