import React, { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

// Components
import Product from './Product';

// const Products = props => {} whole block was given using the props parameter
const Products = () => {
	const { products, addItem } =useContext(ProductContext)
	return (
		<div className="products-container">
			{/* {props.products.map(product => ( -----> props will go away as we are now using the useContext hook */}
			{products.map(product => (	
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
					// addItem={props.addItem} --> this was given, we do not need props any more
				/>
			))}
		</div>
	);
};

export default Products;
