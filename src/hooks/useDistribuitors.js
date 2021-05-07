import useSWR from 'swr'
import { gql } from 'graphql-request'

import { fetcher } from "../services"

const useDistribuitors = (variables) => {
  const distribQuery = gql`
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
      status
      tradingName
      officialName
    }
  }`

  const { data, error } = useSWR((variables.lat && variables.long) ? [distribQuery, variables] : null,
    (query, variables) => fetcher(query, import.meta.env.VITE_API_ZEDELIVERY, variables), {
    revalidateOnFocus: false,
    shouldRetryOnError: true
  })

  console.log('>>>>>>', data, error)

  return { data, error };
}

export default useDistribuitors

