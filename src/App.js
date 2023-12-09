import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path={"/"} element={<Products />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
