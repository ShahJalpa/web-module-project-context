import React, { useContext } from 'react';

//Context
import CartContext from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

// const ShoppingCart = props => { ---> this was given
const ShoppingCart = () => {
	const cart = useContext(CartContext);

	const getCartTotal = () => {
		// return props.cart.reduce((acc, value) => { ---> This was given
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{/* {props.cart.map(item => ( ---> This was given */}
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
