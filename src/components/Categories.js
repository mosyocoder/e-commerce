import axios from "axios";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { CategoryContext } from "../context/CategoryContext";

const CategoriesContainer = styled.div`
	width: 15%;

	@media (max-width: 700px) {
		display: none;
	}
`;

const CategoriesUl = styled.ul`
	list-style-type: none;
	border-right: 1px solid #a6a867;
	color: #1b2021;
`;

const CategoriesButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;

	border-bottom: ${(props) => (props.$selected === "selected" ? "1px solid #1b2021 !important" : "none")};
	font-weight: ${(props) => (props.$selected === "selected" ? "bold" : "")};
	font-size: ${(props) => (props.$selected === "selected" ? "15px" : "")};

	&:hover {
		border-bottom: 1px solid #1b2021;
	}
`;

function Categories() {
	const { category, setCategory, filter, setFilter } = useContext(CategoryContext);
	const categoryTitle = [];

	useEffect(() => {
		axios.get("https://dummyjson.com/products/categories").then((res) => setCategory(res.data));
	}, []);

	category.forEach((item) => {
		if (item.includes("-")) {
			const words = item.split("-");
			categoryTitle.push({
				category: item,
				title: words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
			});
		} else {
			categoryTitle.push({
				category: item,
				title: item.charAt(0).toUpperCase() + item.slice(1),
			});
		}
	});

	return (
		<CategoriesContainer>
			<CategoriesUl>
				<li>
					<CategoriesButton $selected={filter === "all" ? "selected" : ""} onClick={() => setFilter("all")}>
						All Products
					</CategoriesButton>
				</li>
				{categoryTitle.map((item, ix) => (
					<li key={ix}>
						<CategoriesButton $selected={filter === item.category ? "selected" : ""} onClick={() => setFilter(item.category)}>
							{item.title}
						</CategoriesButton>
					</li>
				))}
			</CategoriesUl>
		</CategoriesContainer>
	);
}

export default Categories;
