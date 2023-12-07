import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Filter />
			<Routes>
				<Route path={"/"} element={<Products />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
