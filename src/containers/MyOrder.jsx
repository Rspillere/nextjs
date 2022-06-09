import React, {useState, useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';

import flechita from '@icons/flechita.svg'

const MyOrder = (props) => {
	const {state} = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum
	}



	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src={flechita} alt="arrow" 
				onClick={() => props.setToggleOrders(!props.toggleOrders)}/>
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				<div className={styles['cart-product-list']}>
					{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
					))}
				</div>
				
				
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={styles['primary-button']} href="/checkout">
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;
