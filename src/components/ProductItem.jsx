import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const {addToCart} = useContext(AppContext);
	const {state} = useContext(AppContext);
	const {removeFromCart} = useContext(AppContext);

	const handleClick = item => {
		itsProductAdded() ? removeFromCart(item) : addToCart(item);
	};
	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id);


	return (
		<div className={styles.ProductItem}>
			<Image src={product?.images[0]} alt={product.title} width="100%" height="100%" layout="responsive"/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>			
				<figure aria-hidden="true" onClick={() => handleClick(product)} >
					{itsProductAdded() ? 
						<Image src={addedToCartImage} alt="" width="40px" height="40px" />
					 : 
						<Image src={addToCartImage} alt="" width="40px" height="40px" />
					}					
				</figure>	
			</div>
		</div>
	);
};

export default ProductItem;
