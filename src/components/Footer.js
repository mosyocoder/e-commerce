import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 70px;
	background-color: #51513d;
	color: #e3dc95;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	padding: 10px;
`;

const FooterBrand = styled.a`
	transition: all 1s;
	&:hover {
		border-bottom: 1px solid #1b2021;
		color: #1b2021;
		cursor: pointer;
	}
`;

const FooterContact = styled.div`
	a {
		font-size: 2em;
		font-weight: bold;
		text-decoration: none;
		color: #e3dc95;
		transition: all 1s;
	}

	a:hover {
		border-bottom: 1px solid #1b2021;
		color: #1b2021;
	}
`;

const FooterLinks = styled.div`
	a {
		margin: 10px;
		color: #e3dc95;
		transition: all 1s;
	}

	a:hover {
		color: #1b2021;
	}
`;

function Footer() {
	return (
		<FooterDiv>
			<h1>
				<FooterBrand>e-commerce</FooterBrand>
			</h1>
			<FooterContact>
				<a href="/contact">
					Contact Us <i className="fa-solid fa-angles-right"></i>
				</a>
			</FooterContact>
			<FooterLinks>
				<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mosyocoder/">
					<i className="fa-brands fa-instagram fa-2x"></i>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/mosyocoder">
					<i className="fa-brands fa-github fa-2x"></i>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/enes-seval-162679230/">
					<i className="fa-brands fa-linkedin fa-2x"></i>
				</a>
			</FooterLinks>
		</FooterDiv>
	);
}

export default Footer;
