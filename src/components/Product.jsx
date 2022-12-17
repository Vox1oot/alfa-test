import React from "react";
import { ReactComponent as LikeComponent } from '../icons/like.svg';

const Product = ({ product }) => {

	return (
		<div className="product">
			<div className="product__header">
				<img className="product__image" src={product.images[0]} alt={product.title} />
			</div>
			<div className="product__info">
				<div className="title p-5">{product.title}</div>
				<div className="description p-5">{product.description}</div>
				<div className="footer grid">
					<div className="price p-5">{`Current price: ${product.price} $`}</div>
					<LikeComponent className="like"/>
				</div>
			</div>
		</div>
	)
};

export default Product;