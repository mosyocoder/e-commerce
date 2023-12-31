// import React, { useContext, useEffect, useState } from "react";
// import styled from "styled-components";
// import { CategoryContext } from "../context/CategoryContext";
// import axios from "axios";

// const CartContainer = styled.div`
// 	width: 80%;
// 	min-height: 78vh;
// 	margin: 20px auto 0 auto;
// 	display: grid;
// 	grid-template-columns: 4fr 1fr;
// `;

// const ProductList = styled.div``;

// const Total = styled.div``;

// const ProductCart = styled.div`
// 	display: flex;
// 	align-items: center;
// 	width: 800px;
// 	border-bottom: 1px solid #51513d;

// 	&:last-child {
// 		border-bottom: none;
// 	}

// 	img {
// 		width: 150px;
// 		height: 150px;
// 		object-fit: contain;
// 		border-right: 1px solid #51513d;

// 		margin-right: 10px;
// 		padding-right: 10px;
// 	}
// `;

// const ProductRight = styled.div`
// 	width: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// `;

// const PriceDelete = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: space-around;
// 	height: 150px;
// `;

// function Cart() {
// 	const { cartProducts, setCartProducts } = useContext(CategoryContext);
// 	const [products, setProducts] = useState([]);

// 	useEffect(() => {
// 		const getData = async () => {
// 			try {
// 				const promises = cartProducts.map((id) => axios.get(`https://dummyjson.com/products/${id}`));

// 				const responses = await Promise.all(promises);

// 				const favData = responses.map((res) => res.data);

// 				setProducts(favData);
// 			} catch (error) {
// 				console.log("Error:", error);
// 			}
// 		};
// 		if (cartProducts.length > 0) getData();
// 	}, [cartProducts]);

// 	const calculateTotal = () => {
// 		return products.reduce((total, product) => total + product.price, 0);
// 	};

// 	console.log(products);

// 	if (cartProducts.length === 0) return <CartContainer>No product yet.</CartContainer>;

// 	return (
// 		<CartContainer>
// 			<ProductList>
// 				{products.map((item) => (
// 					<ProductCart key={item.id}>
// 						<img src={item.thumbnail} alt="" />
// 						<ProductRight>
// 							<span>{item.title}</span>
// 							<PriceDelete>
// 								<span>${item.price}</span>
// 								<input defaultValue={1} style={{ width: "50px" }} type="number" />
// 								<span>
// 									<button>X</button>
// 								</span>
// 							</PriceDelete>
// 						</ProductRight>
// 					</ProductCart>
// 				))}
// 			</ProductList>
// 			<Total>Total: ${calculateTotal().toFixed(2)}</Total>
// 		</CartContainer>
// 	);
// }

// export default Cart;
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CategoryContext } from "../context/CategoryContext";
import axios from "axios";
import { addCartButton } from "../assets/buttons";

const CartContainer = styled.div`
	width: 80%;
	min-height: 78vh;
	margin: 20px auto 0 auto;
	display: grid;
	grid-template-columns: 4fr 1fr;
`;

const ProductList = styled.div``;

const Total = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	button {
		background-color: transparent;
		border: 0.1px solid green;
		border-radius: 3px;
		cursor: pointer;
		color: green;
		font-weight: bold;
		font-size: 22px;
	}
`;

const ProductCart = styled.div`
	display: flex;
	align-items: center;
	width: 800px;
	border-bottom: 1px solid #51513d;

	&:last-child {
		border-bottom: none;
	}

	img {
		width: 150px;
		height: 150px;
		object-fit: contain;
		border-right: 1px solid #51513d;

		margin-right: 10px;
		padding-right: 10px;
	}
`;

const ProductRight = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const PriceDelete = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 150px;

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		color: red;
		font-weight: bold;
		font-size: 22px;
	}
`;

function Cart() {
	const { cartProducts, setCartProducts } = useContext(CategoryContext);
	const [products, setProducts] = useState([]);
	const [quantities, setQuantities] = useState({});

	useEffect(() => {
		const getData = async () => {
			try {
				const promises = cartProducts.map((id) => axios.get(`https://dummyjson.com/products/${id}`));

				const responses = await Promise.all(promises);

				const favData = responses.map((res) => res.data);

				setProducts(favData);

				const initialQuantities = {};
				favData.forEach((product) => {
					initialQuantities[product.id] = 1;
				});
				setQuantities(initialQuantities);
			} catch (error) {
				console.log("Error:", error);
			}
		};

		if (cartProducts.length > 0) getData();
	}, [cartProducts]);

	const calculateTotal = () => {
		let total = 0;
		products.forEach((product) => {
			total += product.price * quantities[product.id];
		});
		return total;
	};

	const handleQuantityChange = (productId, newQuantity) => {
		setQuantities((prevQuantities) => ({
			...prevQuantities,
			[productId]: newQuantity,
		}));
	};

	if (cartProducts.length === 0) return <CartContainer>No product yet.</CartContainer>;

	return (
		<CartContainer>
			<ProductList>
				{products.map((item) => (
					<ProductCart key={item.id}>
						<img src={item.thumbnail} alt="" />
						<ProductRight>
							<span>{item.title}</span>
							<PriceDelete>
								<span>${item.price}</span>
								<input value={quantities[item.id]} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} style={{ width: "50px" }} type="number" />
								<span>
									<button onClick={() => addCartButton(Number(item.id), cartProducts, setCartProducts)}>X</button>
								</span>
							</PriceDelete>
						</ProductRight>
					</ProductCart>
				))}
			</ProductList>
			<Total>
				Total: ${calculateTotal().toFixed(2)}
				<button>Checkout</button>
			</Total>
		</CartContainer>
	);
}

export default Cart;
