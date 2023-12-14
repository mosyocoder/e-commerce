import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path={"/"} element={<Products />} />
				<Route path={"/product/:id"} element={<Product />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
