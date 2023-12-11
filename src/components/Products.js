import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Categories from "./Categories";
import "./style.css";

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

function Products() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("https://dummyjson.com/products").then((res) => setData(res.data.products));
	}, []);

	return (
		<ProductsContainer>
			<Categories />
			<ProductsDiv>
				{data.map((item) => (
					<ProductCard>
						<div class="product-tumb">
							<img src={item.thumbnail} alt="" />
						</div>
						<div class="product-details">
							<span class="product-catagory">{item.category}</span>
							<h4>
								<a href="">{item.title}</a>
							</h4>
							<div class="product-bottom-details">
								<div class="product-price">$ {item.price}</div>
								<div class="product-links">
									<a href="">
										<i className="fa fa-heart"></i>
									</a>
									<a href="">
										<i className="fa fa-shopping-cart"></i>
									</a>
								</div>
							</div>
						</div>
					</ProductCard>
				))}
			</ProductsDiv>
		</ProductsContainer>
	);
}

export default Products;
