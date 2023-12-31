import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CategoryContext } from "../context/CategoryContext";
import axios from "axios";
import { likeButton } from "../assets/buttons";

const FavoritesContainer = styled.div`
	width: 80%;
	min-height: 78vh;
	margin: 20px auto 0 auto;
	display: flex;
	flex-direction: row;
`;

const ProdCart = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 20px;

	img {
		width: 150px;
		height: 150px;
		object-fit: contain;
	}
`;

const CartBottom = styled.div`
	span:last-child {
		float: right;
	}

	button {
		border: none;
		background-color: transparent;
		color: #e1e1e1;
		transition: all 0.5s;
	}

	button:hover {
		color: #fbb72c;
	}
`;

function Favorites() {
	const { likedProducts, setLikedProducts } = useContext(CategoryContext);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const promises = likedProducts.map((id) => axios.get(`https://dummyjson.com/products/${id}`));

				const responses = await Promise.all(promises);

				const favData = responses.map((res) => res.data);

				setProducts(favData);
			} catch (error) {
				console.log("Error:", error);
			}
		};
		if (likedProducts.length > 0) getData();
	}, [likedProducts]);

	console.log(products);

	if (likedProducts.length === 0) return <FavoritesContainer>No favorites yet.</FavoritesContainer>;

	return (
		<FavoritesContainer>
			{products.map((item) => (
				<ProdCart key={item.id}>
					<img src={item.thumbnail} alt="" />
					<span>{item.title}</span>
					<CartBottom>
						<span>$ {item.price}</span>
						<span>
							<button className={likedProducts.includes(Number(item.id)) ? "inLocal" : ""} onClick={() => likeButton(Number(item.id), likedProducts, setLikedProducts)}>
								<i className="fa fa-heart fa-2x"></i>
							</button>
						</span>
					</CartBottom>
				</ProdCart>
			))}
		</FavoritesContainer>
	);
}

export default Favorites;
