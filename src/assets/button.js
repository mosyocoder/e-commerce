export const button = (action, id) => {
	const likes = JSON.parse(localStorage.getItem("likes"));
	const bag = JSON.parse(localStorage.getItem("bag"));

	if (action === "like") {
		if (!likes) localStorage.setItem("likes", JSON.stringify([id]));
		else {
			const ix = likes.indexOf(id);
			if (ix !== -1) {
				likes.splice(ix, 1);
				localStorage.setItem("likes", JSON.stringify(likes));
			} else {
				likes.push(id);
				localStorage.setItem("likes", JSON.stringify(likes));
			}
		}
	}

	if (action === "addBag") {
		if (!bag) localStorage.setItem("bag", JSON.stringify([id]));
		else {
			const ix = bag.indexOf(id);
			if (ix !== -1) {
				bag.splice(ix, 1);
				localStorage.setItem("bag", JSON.stringify(bag));
			} else {
				bag.push(id);
				localStorage.setItem("bag", JSON.stringify(bag));
			}
		}
	}
};
