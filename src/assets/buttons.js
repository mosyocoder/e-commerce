export const likeButton = (id, likedProducts, setLikedProducts) => {
	if (!likedProducts.includes(id)) {
		const updatedProducts = [...likedProducts, id];
		setLikedProducts(updatedProducts);
		localStorage.setItem("likedProducts", JSON.stringify(updatedProducts));
	} else {
		const updatedProducts = likedProducts.filter((item) => item !== id);
		setLikedProducts(updatedProducts);
		localStorage.setItem("likedProducts", JSON.stringify(updatedProducts));
	}
};

export const addCartButton = (id, cartProducts, setCartProducts) => {
	if (!cartProducts.includes(id)) {
		const updatedProducts = [...cartProducts, id];
		setCartProducts(updatedProducts);
		localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
	} else {
		const updatedProducts = cartProducts.filter((item) => item !== id);
		setCartProducts(updatedProducts);
		localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
	}
};
