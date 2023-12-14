import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import ReactImageGallery from "react-image-gallery";

function Product({ params }) {
	const [product, setProduct] = useState();

	const { id } = useParams(params);

	useEffect(() => {
		axios.get(`https://dummyjson.com/products/${id}`).then((res) => setProduct(res.data));
	}, [id]);

	console.log(product);
	const images = [];
	if (product) {
		product.images.map((img) => {
			images.push({
				original: img,
			});
		});
	}

	return (
		<div>
			<ReactImageGallery autoPlay style={{ maxWidth: "200px" }} items={images} />
		</div>
	);
}

export default Product;
