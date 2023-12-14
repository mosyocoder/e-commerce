import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Categories from "./Categories";
import { CategoryContext } from "../context/CategoryContext";

const ProductsContainer = styled.div`
	max-width: 90%;
	margin: 15px auto 0 auto;
	display: flex;
	flex-direction: row;
`;

const ProductsDiv = styled.div`
	width: 85%;
	margin-top: 13px;
	margin-left: 10px;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 700px) {
		width: 100%;
	}
`;

const ProductCard = styled.div`
	width: 23%;
	position: relative;
	box-shadow: 0 2px 7px #dfdfdf;
	background: #fafafa;
	max-height: 350px;
	margin: 10px;
`;

const ProductTumb = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	background: #f0f0f0;

	img {
		max-height: 150px;
	}
`;

const ProductDetails = styled.div`
	padding: 20px;

	h4 a {
		font-weight: 500;
		display: block;
		margin-bottom: 18px;
		text-transform: uppercase;
		color: #363636;
		text-decoration: none;
		transition: 0.3s;
	}

	h4 a:hover {
		color: #fbb72c;
	}
`;

const ProductsCategory = styled.span`
	display: block;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	color: #ccc;
	margin-bottom: 10px;
`;

const ProductBotDetails = styled.div`
	overflow: hidden;
	border-top: 1px solid #eee;
	padding-top: 10px;

	div {
		float: left;
		width: 50%;
	}
`;

const ProductPrice = styled.div`
	font-size: 18px;
	color: #fbb72c;
	font-weight: 600;
`;

const ProductLinks = styled.div`
	text-align: right;

	a {
		display: inline-block;
		margin-left: 5px;
		color: #e1e1e1;
		transition: 0.3s;
		font-size: 17px;
	}
	a:hover {
		color: #fbb72c;
	}
`;

function Products() {
    const [data,setData] = useState([])
	const {filter } = useContext(CategoryContext);


	useEffect(() => {
		axios.get(filter === "all" ? "https://dummyjson.com/products?limit=100" : `https://dummyjson.com/products/category/${filter}`).then((res) => setData(res.data.products));
	}, [filter]);

	return (
		<ProductsContainer>
			<Categories />
			<ProductsDiv>
				{data.map((item, ix) => (
					<ProductCard key={ix}>
						<ProductTumb>
							<img src={item.thumbnail} alt="" />
						</ProductTumb>
						<ProductDetails>
							<ProductsCategory>{item.category}</ProductsCategory>
							<h4>
								<a href={`/product/${item.id}`}>{item.title}</a>
							</h4>
							<ProductBotDetails>
								<ProductPrice>$ {item.price}</ProductPrice>
								<ProductLinks>
									<a href="">
										<i className="fa fa-heart"></i>
									</a>
									<a href="">
										<i className="fa fa-shopping-cart"></i>
									</a>
								</ProductLinks>
							</ProductBotDetails>
						</ProductDetails>
					</ProductCard>
				))}
			</ProductsDiv>
		</ProductsContainer>
	);
}

export default Products;
