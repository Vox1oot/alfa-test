import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (url) => {
		const response = await axios.get(url);
		return response.data;
	}
)

const productsSlice = createSlice({
	name: 'products',
	initialState: { products: [] },
	reducers: {
		toggleLike: (state, { payload }) => {
			const product = state.products.find(({ id }) => id === payload);
			product.like = !product.like;
		},
		deleteProduct: (state, { payload }) => {
			const index = state.products.findIndex(({ id }) => id === payload);
			state.products.splice(index, 1);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
			const newProducts = payload.products.map((product) => ({ ...product, like: false }));
			state.products = [...newProducts]
		});
	},
});

export const allSelector = (state) => state.products.products;
export const likedSelector = (state) => state.products.products.filter(({ like }) => like);
export const { toggleLike, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;