import styled from "styled-components";

export const Link = styled.a`
	* {
		height: 1.5rem;
		width: 1.5rem;
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
	grid-template-rows: 1fr auto;
`;

export const Section = styled.div`
	justify-self: center;
	align-self: center;
	display: grid;
	grid-template-columns: 4rem 1fr;
	grid-gap: 1rem;
`;
export const Headshot = styled.div`
	background: lightgray;
	height: 4rem;
	width: 4rem;
	border-radius: 50%;
	grid-column: 1/2;
	grid-row: 1/2;
	background: url(${({ img }) => img});
	background-size: contain;
	align-self: center;
`;

export const Name = styled.h2`
	color: #ffffff;
`;

export const Description = styled.p`
	color: #188f61;
	font-size: 0.9rem;
`;

export const Button = styled.button`
	width: 7rem;
	grid-column: 1/3;
	justify-self: center;

	background: #188f61;
	border: none;
	outline: none;
	color: #ffffff;
	text-transform: uppercase;
	cursor: pointer;

	padding: 0.25rem;
	border-radius: 0.5rem;
	:active {
		-webkit-box-shadow: inset 0px 0px 23px 0px rgba(94, 94, 94, 1);
		-moz-box-shadow: inset 0px 0px 23px 0px rgba(94, 94, 94, 1);
		box-shadow: inset 0px 0px 23px 0px rgba(94, 94, 94, 1);
	}
`;
export const Details = styled.div`
	max-height: ${({ height }) => height};
	height: 70vh;
	background: #242424;
	transition: max-height 0.2s ease-in-out;

	display: grid;
	overflow: hidden;
	align-items: center;
`;

export const OptionContainer = styled.div`
	display: grid;
	margin: 2rem;
	grid-gap: 2rem;
	justify-items: center;
`;

export const Option = styled.button`
	background: #161616;
	display: grid;
	align-items: center;
	justify-items: center;
	height: 3rem;
	color: #ffffff;
	text-transform: uppercase;
	font-size: 0.9rem;
	width: 100%;
	max-width: 40rem;

	cursor: pointer;
	border: none;
	outline: none;
`;
