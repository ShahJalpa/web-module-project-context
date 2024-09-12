import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={ cart }>

					<Navigation />
					{/* <Navigation cart={cart} /> ---> THis was given*/}

					{/* Routes */}
					<Route exact path="/">
						<Products />
						{/* <Products products={products} addItem={addItem} /> THIS WAS GIVEN*/}
					</Route>

					<Route path="/cart">
						<ShoppingCart />
						{/* <ShoppingCart cart={cart} /> ---> This was given*/}
					</Route>

				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
