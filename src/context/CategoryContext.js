import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
	const [category, setCategory] = useState("all");

	const values = {
		category,
		setCategory,
	};

	return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>;
};
