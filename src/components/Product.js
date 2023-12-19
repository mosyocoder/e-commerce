import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import "./style.css";
import { button } from "../assets/button";

const ProductContainer = styled.div`
	width: 1200px;
	margin: 25px auto 0 auto;
	display: flex;
	flex-direction: column;
`;

const ProductCategory = styled.div``;

const ProductDetails = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

const Carousel = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 700px;
	height: 700px;
`;

const LeftArrow = styled(BsArrowLeftCircleFill)`
	position: absolute;
	filter: drop-shadow(0px 0px 5px #555);
	width: 2rem;
	height: 2rem;
	color: white;
	left: 1rem;

	&:hover {
		cursor: pointer;
	}
`;

const RightArrow = styled(BsArrowRightCircleFill)`
	position: absolute;
	filter: drop-shadow(0px 0px 5px #555);
	width: 2rem;
	height: 2rem;
	color: white;
	right: 1rem;

	&:hover {
		cursor: pointer;
	}
`;

const Indicators = styled.span`
	display: flex;
	position: absolute;
	bottom: 1rem;
`;

const Details = styled.div`
	width: 90%;
	margin: 0 auto;

	span {
		font-weight: bold;
		font-size: 18px;
	}
	h1 {
		float: right;
	}
`;

const ProductLinks = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;

	button {
		width: 50%;
		padding: 3px;
		border: none;
		border-radius: 10px;
		background-color: transparent;
		color: #e1e1e1;
		transition: 0.3s;
		font-size: 17px;
	}
	button:hover {
		color: #fbb72c;
		background-color: #f1f1f1;
	}
`;

function Product({ params }) {
	const [product, setProduct] = useState();
	const [slide, setSlide] = useState(0);

	const { id } = useParams(params);

	const likes = JSON.parse(localStorage.getItem("likes"));
	const bag = JSON.parse(localStorage.getItem("bag"));

	const [likeInLocal, setLikeInLocal] = useState(false);
	const [bagInLocal, setBagInLocal] = useState(false);

	useEffect(() => {
		likes?.find((item) => {
			if (item === product?.id) setLikeInLocal(true);
		});

		bag?.forEach((item) => {
			if (item === product?.id) setBagInLocal(true);
		});
	}, [likes, bag]);

	useEffect(() => {
		axios.get(`https://dummyjson.com/products/${id}`).then((res) => setProduct(res.data));
	}, [id]);

	const images = [];
	if (product) {
		product.images.map((img) => {
			images.push({
				original: img,
			});
		});
	}

	const nextSlide = () => {
		setSlide(slide === product.images.length - 1 ? 0 : slide + 1);
	};

	const prevSlide = () => {
		setSlide(slide === 0 ? product.images.length - 1 : slide - 1);
	};

	return (
		<ProductContainer>
			<ProductCategory>
				<p>
					<span>ANASAYFA {">"}</span> {product?.category.toUpperCase()}
				</p>
			</ProductCategory>
			<ProductDetails>
				<Carousel>
					<LeftArrow onClick={prevSlide} />
					{product?.images.map((item, idx) => {
						return <img src={item} alt="" key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} />;
					})}
					<RightArrow onClick={nextSlide} />
					<Indicators>
						{product?.images.map((_, idx) => {
							return <button key={idx} className={slide === idx ? "indicator" : "indicator indicator-inactive"} onClick={() => setSlide(idx)}></button>;
						})}
					</Indicators>
				</Carousel>
				<Details>
					<p>
						<span>{product?.brand} </span>
						{product?.title}
					</p>
					<div style={{ display: "flex", alignItems: "center" }}>
						<h3>{product?.rating}</h3>
						<Rating readOnly style={{ maxWidth: 100 }} orientation="horizontal" value={product?.rating} />
					</div>

					<p>{product?.description}</p>
					<h1>{product?.price}$</h1>
					<div style={{ marginTop: 460 }}>
						<ProductLinks>
							<button className={likeInLocal ? "inLocal" : ""} onClick={() => button("like", product.id)}>
								<i className="fa fa-heart fa-3x"></i>
							</button>

							<button className={bagInLocal ? "inLocal" : ""} onClick={() => button("addBag", product.id)}>
								<i className="fa fa-shopping-cart fa-3x"></i>
							</button>
						</ProductLinks>
					</div>
				</Details>
			</ProductDetails>
		</ProductContainer>
	);
}

export default Product;
