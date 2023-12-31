import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path={"/"} element={<Products />} />
				<Route path={"/product/:id"} element={<Product />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
