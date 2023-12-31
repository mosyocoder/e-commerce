import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
	const [category, setCategory] = useState([]);
    const [filter, setFilter] = useState("all");
    const [likedProducts, setLikedProducts] = useState(JSON.parse(localStorage.getItem("likedProducts")) || []);
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);

    const values = {
		category,
		setCategory,
		filter,
		setFilter,
		likedProducts,
		setLikedProducts,
		cartProducts,
		setCartProducts,
    };

	return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>;
};
