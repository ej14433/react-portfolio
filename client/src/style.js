import styled from "styled-components";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export const Link = styled.a`
	* {
		height: 2rem;
		width: 2rem;
		color: white;
		:hover {
			color: #188f61;
		}
	}
`;

export const Page = styled.div`
	height: 100vh;
	background: #161616;
	display: grid;
`;

export const Section = styled.div`
	justify-self: center;
	align-self: center;
	display: grid;
	grid-template-columns: 5rem 1fr;
	grid-gap: 1rem;
`;
export const Headshot = styled.div`
	background: lightgray;
	height: 5rem;
	width: 5rem;
	border-radius: 50%;
	grid-column: 1/2;
	grid-row: 1/2;
	background: url(${({ img }) => img});
	background-size: contain;
	align-self: center;
`;

export const Name = styled.h1`
	color: #ffffff;
`;

export const Description = styled.p`
	color: #188f61;
`;
