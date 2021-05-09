// import { useMemo, useState } from 'react'
// import { CardGroup, Col, Container, Row } from 'react-bootstrap'

// import { Loader } from 'components/basic'
// import { useSpotifyPlaylists, useSpotifyFilters } from 'custom-hooks'
// import {
//   CardPlaylist,
//   Navbar,
//   Filters,
//   ErrorState,
//   CardNoResults
// } from 'components/general'

// const Dashboard = () => {
//   const [name, setName] = useState('')
//   const [locale, setLocale] = useState('')
//   const [country, setCountry] = useState('')
//   const [timestamp, setTimestamp] = useState('')
//   const [limit, setLimit] = useState()
//   const [offset, setOffset] = useState()

//   const {
//     hasError,
//     isLoading,
//     content: {
//       playlists = []
//     } = {}
//   } = useSpotifyPlaylists({
//     name,
//     locale,
//     country,
//     timestamp,
//     limit,
//     offset
//   })

//   const {
//     filters,
//     isLoading: isLoadingFilters
//   } = useSpotifyFilters()

//   const mapChangeEventsToStateChanges = useMemo(() => ({
//     'name': setName,
//     'locale': setLocale,
//     'country': setCountry,
//     'timestamp': setTimestamp,
//     'limit': setLimit,
//     'offset': setOffset
//   }), [])

//   const handleChangeFilters = event => {
//     const { target: { name, value } = {} } = event

//     mapChangeEventsToStateChanges[name] && mapChangeEventsToStateChanges[name](value)
//   }

//   const renderPlaylistsCards = () => {
//     const { items = [] } = playlists

//     return items.length ? (
//       items.map(item => (
//         <CardPlaylist
//           key={item.id}
//           className="col-xl-2 col-md-3 col-sm-4 col-6"
//           {...item} />
//       ))
//     ) : <CardNoResults />
//   }

//   const renderFilters = () => {
//     if (isLoadingFilters) {
//       return <Loader />
//     }

//     return (
//       <Row>
//         <Col>
//           <Filters
//             filters={filters}
//             handleChange={handleChangeFilters} />
//         </Col>
//       </Row>
//     )
//   }

//   return (
//     <Container fluid>
//       <Navbar />

//       {renderFilters()}

//       {isLoading ? <Loader /> : (
//         <CardGroup className="py-4">
//           <Row className="w-100">
//             {renderPlaylistsCards()}
//           </Row>
//         </CardGroup>
//       )}

//       {hasError && <ErrorState />}
//     </Container>
//   )
// }
import React from "react";

const ProductsList = () => {
  console.log(">>> products list loaded");

return(<></>);
};

export default ProductsList;
