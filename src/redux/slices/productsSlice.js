import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await axios.get('https://dummyjson.com/products?limit=10');
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
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
			const newProducts = payload.products.map((product) => ({ ...product, like: false }));
			state.products = [...newProducts]
		});
	},
});

export const { toggleLike } = productsSlice.actions;
export default productsSlice.reducer;