import { request } from "graphql-request";

export const fetcher = async (query, url, variables) => await request(url, query, variables);
