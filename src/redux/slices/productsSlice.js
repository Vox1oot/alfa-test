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
		incrementPrice: (state) => {
			state.price += 1;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
			const newProducts = payload.products.map((product) => ({ ...product, like: false }));
			state.products = [...newProducts]
		});
	},
});

export const { incrementPrice } = productsSlice.actions;
export default productsSlice.reducer;