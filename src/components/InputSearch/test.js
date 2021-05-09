import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import InputSearch from './';

const setupGoogleMock = () => {
  const google = {
    maps: {
      places: {
        SearchBox: jest.fn().mockReturnValue(document.createElement('input')),
        MapsEventListener: [],
        AutocompleteService: () => { },
        PlacesServiceStatus: {
          INVALID_REQUEST: 'INVALID_REQUEST',
          NOT_FOUND: 'NOT_FOUND',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS',
        },
      },
      event: {
        addListener: () => { },
        removeListener: () => { }
      },
      Geocoder: () => { },
      GeocoderStatus: {
        ERROR: 'ERROR',
        INVALID_REQUEST: 'INVALID_REQUEST',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS',
      },
    },
  };

  global.window.google = google;
};

describe('InputSearch', () => {
  beforeAll(() => {
    jest.clearAllMocks();
    setupGoogleMock();
  });

  it('should render a component with `bla` placeholder', async () => {
    const placeholderText = 'bla';

    render(<InputSearch placeholder={placeholderText} />);

    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it('should render a component and call change function', async () => {
    const placeholderText = 'Test';
    const handlePlaceSelected = jest.fn();

    render(<InputSearch placeholder={placeholderText} handlePlaceSelected={handlePlaceSelected} />);

    const inputSearch = screen.getByPlaceholderText(placeholderText);

    expect(inputSearch).toBeInTheDocument();

    fireEvent.change(inputSearch, { target: { value: 'Americo brasiliense' } });

    expect(inputSearch.value).toBe('Americo brasiliense');
  });
});
