import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Product, Loader, Message } from '../components';
import { listProducts } from '../actions/productActions';

function HomePage() {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { error, loading, products } = productList;
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div>
			<h1>Lastest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="success">{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</div>
	);
}

export default HomePage;
