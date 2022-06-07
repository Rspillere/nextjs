import React, {useState, useContext} from 'react';
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
			<div className="title-container">
				<img src={flechita} alt="arrow" 
				onClick={() => props.setToggleOrders(!props.toggleOrders)}/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className='cart-product-list'>
					{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
					))}
				</div>
				
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
