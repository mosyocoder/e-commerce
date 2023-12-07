import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import axios from "axios";

function Products() {
	const { category } = useContext(CategoryContext);
	const [data, setData] = useState([]);

	console.log(data);

	useEffect(() => {
		axios.get("https://fakestoreapi.com/products/category/jewelery").then((res) => setData(res.data));
	}, [category]);

	return (
		<div>
			{data.map((item) => (
				<p>{item.category}</p>
			))}
		</div>
	);
}

export default Products;
