import React from "react";
import { Container } from "react-bootstrap";
import { Header, Footer } from "./components";

import { Home } from "./pages";

function App() {
	return (
		<div>
			<Header />
			<main className="py-3">
				<Container>
					<Home />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
