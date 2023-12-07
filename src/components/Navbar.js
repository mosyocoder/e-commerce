import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
	width: 100%;
	background-color: #51513d;
	color: #e3dcc2;
`;

const Nav = styled.div`
	max-width: 100%;
	height: 80px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	margin-right: 50px;
	color: #e3dcc2;
`;

function Navbar() {
	return (
		<NavbarContainer>
			<Nav>
				<NavLink to={"/"}>
					<h1>e-commerce</h1>
				</NavLink>
				<div>
					<NavLink>
						<i className="fa-regular fa-heart fa-2xl"></i>
					</NavLink>
					<NavLink>
						<i className="fa-solid fa-bag-shopping fa-2xl"></i>
					</NavLink>
				</div>
			</Nav>
		</NavbarContainer>
	);
}

export default Navbar;
