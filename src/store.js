import { configureStore } from '@reduxjs/toolkit';

import locationReducer from './slices/location';
import productsReducer from './slices/products';

export default configureStore({
  reducer: {
    location: locationReducer,
    products: productsReducer
  },
});
