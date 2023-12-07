import React, { useContext } from "react";
import styled from "styled-components";
import { CategoryContext } from "../context/CategoryContext";

const FilterList = styled.ul`
	list-style-type: none;
	background-color: #51513d;
	margin: 0;
	padding: 5px;
	border-top: 1px solid #e3dcc2;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

const FilterButton = styled.button`
	background-color: transparent;
	border: none;
	color: #e3dcc2;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		border-bottom: 1px solid #e3dcc2;
	}

	@media (max-width: 700px) {
		font-size: 14px;
	}
`;

function Filter() {
	const { category, setCategory } = useContext(CategoryContext);

	return (
		<FilterList>
			<li>
				<FilterButton onClick={() => setCategory("all")} className={category === "all" ? "active" : ""}>
					All Products
				</FilterButton>
			</li>
			<li>
				<FilterButton onClick={() => setCategory("men")} className={category === "men" ? "active" : ""}>
					Men
				</FilterButton>
			</li>
			<li>
				<FilterButton onClick={() => setCategory("women")} className={category === "women" ? "active" : ""}>
					Women
				</FilterButton>
			</li>
			<li>
				<FilterButton onClick={() => setCategory("jewellery")} className={category === "jewellery" ? "active" : ""}>
					Jewellery
				</FilterButton>
			</li>
			<li>
				<FilterButton onClick={() => setCategory("electronic")} className={category === "electronic" ? "active" : ""}>
					Electronic
				</FilterButton>
			</li>
		</FilterList>
	);
}

export default Filter;
