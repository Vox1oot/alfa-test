import React from "react";
import Product from "./Product.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice.js';


const Products = () => {
	const { products } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<div className="products">
			<div className="products-container grid">
				{ products.map((product) => (
					<Product  key={product.id}  product={product}/>
				)) }
			</div>
		</div>
	)
};

export default Products;
