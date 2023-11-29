import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
	width: 100%;
	height: ${(props) => (props.$expandNavbar ? "100vh" : "80px")};
	background-color: #51513d;
	color: #e3dcc2;
`;

const Nav = styled.div`
	max-width: 100%;
	height: 80px;
	margin: 0 auto;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: #e3dcc2;
`;

const NavUl = styled.ul`
	padding: 0;

	li {
		display: inline;
		margin-right: 10px;
		padding-right: 10px;
		border-right: 0.1px solid #e3dcc2;

		&:last-child {
			margin: 0;
			border: none;
		}
	}

	@media (max-width: 700px) {
		max-width: 0;
		display: none;
	}
`;

const NavExpandedUl = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;

	li {
		margin-bottom: 25px;
	}
`;

const ExpandButton = styled.button`
	border: none;
	background-color: transparent;
	color: #e3dcc2;
	cursor: pointer;

	@media (min-width: 700px) {
		display: none;
	}
`;

function Navbar() {
	const [expandNavbar, setExpandNavbar] = useState(false);

	return (
		<NavbarContainer $expandNavbar={expandNavbar}>
			<Nav>
				<h1>
					<NavLink to={"/"}>e-commerce</NavLink>
				</h1>
				<NavUl>
					<li>
						<NavLink to={"/"}>All Products</NavLink>
					</li>
					<li>
						<NavLink to={"/"}>Men</NavLink>
					</li>
					<li>
						<NavLink to={"/"}>Women</NavLink>
					</li>
					<li>
						<NavLink to={"/"}>Jelewery</NavLink>
					</li>
					<li>
						<NavLink to={"/"}>Electronics</NavLink>
					</li>
				</NavUl>
				<NavLink>
					<i class="fa-solid fa-bag-shopping fa-xl"></i>
				</NavLink>
				<ExpandButton onClick={() => setExpandNavbar((curr) => !curr)}>{expandNavbar ? <i class="fa-solid fa-x fa-2xl"></i> : <i class="fa-solid fa-bars fa-2xl"></i>}</ExpandButton>
			</Nav>
			{expandNavbar && (
				<NavExpandedUl>
					<li>
						<NavLink to={"/"}>All Products</NavLink>
					</li>
					<li>
						<NavLink to={"/"}>Men</NavLink>
					</li>
					<li>
						<NavLink to={"/"}>Women</NavLink>
					</li>
					<li>
						<NavLink to={"/"}>Jelewery</NavLink>
					</li>
					<li>
						<NavLink to={"/"}>Electronics</NavLink>
					</li>
				</NavExpandedUl>
			)}
		</NavbarContainer>
	);
}

export default Navbar;
