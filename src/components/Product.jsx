import React from "react";
import { ReactComponent as LikeComponent } from '../icons/like.svg';
import { ReactComponent as DeleteComponent } from '../icons/trash.svg';
import { useDispatch } from 'react-redux';
import { toggleLike, deleteProduct } from "../redux/slices/productsSlice";
import cn from 'classnames';

const Product = ({ product: { like, id, ...rest } }) => {
	const dispatch = useDispatch();

	const likeClasses = cn("icon", 'like', { liked: like });
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
				<div className="product__footer">
					<DeleteComponent
						className="icon delete"
						onClick={() => dispatch(deleteProduct(id))}
					/>
					<LikeComponent 
						onClick={() => dispatch(toggleLike(id))} 
						className={likeClasses}
					/>
				</div>
			</div>
		</div>
	)
};

export default Product;