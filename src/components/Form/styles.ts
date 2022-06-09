import styled from "styled-components";
import { mediaQuery } from "../../styles/GlobalStyle";

interface InputProps {
	isActive: boolean;
}

export const Input = styled.input<InputProps>`
	width: 100%;
	height: 3rem;
	padding: 0 1.5rem;
	grid-area: input;

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
`;

export const Button = styled.button`
	width: 100%;
	height: 3rem;
	grid-area: button;

	color: white;
	font-weight: 600;

	background-color: ${({ theme }) => theme.colors.blue};
	border: transparent;
	border-radius: 5rem;

	&:hover {
		opacity: 0.75;
	}
`;

export const ErrorMsg = styled.p`
	grid-area: error;

	color: ${({ theme }) => theme.colors.lightRed};
	font-size: 0.75rem;
	margin-left: 1.5rem;
	width: 100%;
`;

export const FormContainer = styled.form`
	width: 100%;
	min-height: 2rem;

	display: grid;
	grid-template-columns: 60% 25%;
	grid-template-areas:
		"input button"
		"error  .";
	justify-content: center;
	align-items: center;
	gap: 1rem;
	row-gap: 0.5rem;

	@media screen and (max-width: ${mediaQuery.tablet}) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 5rem;
		gap: 0.5rem;
	}
`;
