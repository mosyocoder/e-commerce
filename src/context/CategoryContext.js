import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
	const [category, setCategory] = useState([]);
    const [filter, setFilter] = useState("all");

    const values = {
		category,
		setCategory,
		filter,
		setFilter,
    };

	return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>;
};
