import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';

import { Home, ProductPage, CartPage } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="py-3">
				<Container>
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route path="/product/:id" element={<ProductPage />} />
						<Route path="/cart">
							<Route path=":id" element={<CartPage />} />
							<Route path="" element={<CartPage />} />
						</Route>
					</Routes>
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
