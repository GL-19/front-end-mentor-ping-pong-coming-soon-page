import styled from "styled-components";
import { mediaQuery } from "../../styles/GlobalStyle";

interface InputProps {
	isActive: boolean;
}

export const Input = styled.input<InputProps>`
	width: 60%;
	height: 3rem;
	padding: 0 1.5rem;

	border-radius: 5rem;
	border: 0.125rem solid
		${({ theme, isActive }) => (isActive ? theme.colors.lightRed : theme.colors.paleBlue)};

	color: ${({ theme }) => theme.colors.veryDarkBlue};

	::placeholder {
		color: ${({ theme }) => theme.colors.paleBlue};
		opacity: 1;
	}

	:focus {
		outline: none;
	}

	@media screen and (max-width: ${mediaQuery.tablet}) {
		width: 100%;
	} ;
`;

export const Button = styled.button`
	width: 25%;
	height: 3rem;

	color: white;
	font-weight: 600;

	background-color: ${({ theme }) => theme.colors.blue};
	border-radius: 5rem;

	&:hover {
		opacity: 0.75;
	}

	@media screen and (max-width: ${mediaQuery.tablet}) {
		width: 100%;
	} ;
`;

export const FormContainer = styled.form`
	width: 100%;
	min-height: 2rem;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	@media screen and (max-width: ${mediaQuery.tablet}) {
		flex-direction: column;
		min-height: 5rem;
		gap: 0.5rem;
	} ;
`;
