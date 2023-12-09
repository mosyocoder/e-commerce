import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import axios from "axios";
import styled from "styled-components";

const ProductsContainer = styled.div`
	max-width: 90%;
	margin: 15px auto 0 auto;
	display: flex;
	flex-direction: row;
`;

const CategoriesDiv = styled.div`
	width: 15%;

	@media (max-width: 700px) {
		display: none;
	}
`;

const ProductsDiv = styled.div`
	width: 85%;

	@media (max-width: 700px) {
		width: 100%;
	}
`;

function Products() {
	const { category } = useContext(CategoryContext);
	const [data, setData] = useState([]);
	const [cat, setCat] = useState([]);

	useEffect(() => {
		axios.get("https://dummyjson.com/products").then((res) => setData(res.data.products));
		axios.get("https://dummyjson.com/products/categories").then((res) => setCat(res.data));
	}, [category]);

	return (
		<ProductsContainer>
			<CategoriesDiv>
				CategoriesDiv
				<ul>
					{cat.map((category, ix) => (
						<li key={ix}>{category}</li>
					))}
				</ul>
			</CategoriesDiv>
			<ProductsDiv>ProductsDiv</ProductsDiv>
		</ProductsContainer>
	);
}

export default Products;
