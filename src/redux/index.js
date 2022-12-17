import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice.js';

export default configureStore({
	reducer: {
		products: productsReducer,
	}
});
