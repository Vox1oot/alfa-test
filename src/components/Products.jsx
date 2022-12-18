import React from "react";
import Product from "./Product.jsx";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, likedSelector, allSelector } from '../redux/slices/productsSlice.js';

import getURL from "../utilities/getURL.js";

const Products = () => {
	const [filter, setFilter] = useState(false);
	const products = useSelector(allSelector);
	const liked = useSelector(likedSelector);

	const dispatch = useDispatch();

	const renderProducts = (products) => products.map((product) => (
		<Product  key={product.id}  product={product}/>
	));

	const toggleFilter = () => {
		setFilter(!filter);
	}

	useEffect(() => {
		dispatch(fetchProducts(getURL('https://dummyjson.com/products', 10)));
	}, [dispatch]);

	return (
		<div className="products">
			<div className="products__filter">
				<button 
					className="filter btn"
					onClick={toggleFilter}
				>
					{filter ? 'Show all' : 'Show liked'}
				</button>
			</div>
			<div className="products-container grid">
				{filter ? renderProducts(liked) : renderProducts(products)}
			</div>
		</div>
	)
};

export default Products;
