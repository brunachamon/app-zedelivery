import { request } from 'graphql-request'

export const fetcher = (query, url, variables) => request(url, query, variables)
