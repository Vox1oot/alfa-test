import React from "react";
import { ReactComponent as LikeComponent } from '../icons/like.svg';
import { useDispatch } from 'react-redux';
import { toggleLike } from "../redux/slices/productsSlice";
import cn from 'classnames';

const Product = ({ product: { like, ...rest } }) => {
	const dispatch = useDispatch();

	const iconClasses = cn("icon", { liked: like });
	const productClasses = cn("product", { "liked-product": like });

	return (
		<div className={productClasses}>
			<div className="product__header">
				<img className="product__image" src={rest.images[0]} alt={rest.title} />
			</div>
			<div className="product__info">
				<div className="title p-5">{rest.title}</div>
				<div className="description p-5">{rest.description}</div>
				<div className="price p-5">{`Current price: ${rest.price} $`}</div>
				<LikeComponent 
					onClick={() => dispatch(toggleLike(rest.id))} 
					className={iconClasses}
				/>
			</div>
		</div>
	)
};

export default Product;