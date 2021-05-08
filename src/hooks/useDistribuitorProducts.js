import { useMemo } from 'react';
import { gql } from 'graphql-request'
import useSWR from 'swr'

import { fetcher } from '../services'

const useDistribuitorProducts = (location) => {
  const variables = useMemo(() => ({
    now: new Date().toISOString(),
    lat: location ? location.lat?.toString() : '',
    long: location ? location.lng?.toString() : '',
    algorithm: 'NEAREST'
  }), [location])

  const hasValueSelected = (variables.lat && variables.long);
  const distribQuery = gql`
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
      status
      tradingName
    }
  }`

  const { data } = useSWR(hasValueSelected ? [distribQuery, variables] : null,
    (query, variables) => fetcher(query, import.meta.env.VITE_API_ZEDELIVERY, variables), {
    revalidateOnFocus: false
  })

  const distribuitor = useMemo(() => data?.pocSearch[0], [data])

  const productsQuery = gql`
    query poc($id: ID!, $categoryId: Int, $search: String){
      poc(id: $id) {
        id
        products(categoryId: $categoryId, search: $search) {
          id
          title
          rgb
          images {
            url
          }
          productVariants {
            availableDate
            productVariantId
            price
            inventoryItemId
            shortDescription
            title
            published
            volume
            volumeUnit
            description
            subtitle
            components {
              id
              productVariantId
              productVariant {
                id
                title
                description
                shortDescription
              }
            }
          }
        }
      }
    }`

  const params = useMemo(() => ({ id: distribuitor?.id, Search: '', categoryId: null }), [distribuitor?.id])

  const {
    data: {
      poc: {
        products = []
      } = {}
    } = {}
  } = useSWR([productsQuery, params],
    (query, variables) => fetcher(query, import.meta.env.VITE_API_ZEDELIVERY, variables), {
    revalidateOnFocus: false
  })

  return { products };
}

export default useDistribuitorProducts
