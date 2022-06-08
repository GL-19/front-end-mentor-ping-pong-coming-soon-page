import styled from "styled-components";
import { mediaQuery } from "./GlobalStyle";

export const Main = styled.main`
	margin: 0 auto;
	padding: 3rem 1.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.5rem;

	max-width: 720px;

	&:last-child {
		justify-self: baseline;
	}

	@media screen and (max-width: ${mediaQuery.tablet}) {
		padding: 3rem 10%;
		gap: 2rem;
	}
`;

export const TextWrapper = styled.div`
	width: 100%;
	text-align: center;

	h1 {
		color: ${({ theme }) => theme.colors.gray};
		font-weight: 300;
		font-size: 3rem;
		margin-bottom: 1rem;

		strong {
			color: ${({ theme }) => theme.colors.veryDarkBlue};
			font-weight: 700;
		}
	}

	h2 {
		color: ${({ theme }) => theme.colors.veryDarkBlue};
		font-weight: 300;
		font-size: 1.25rem;
	}

	@media screen and (max-width: ${mediaQuery.tablet}) {
		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 1rem;
		}
	} ;
`;

export const Dashboard = styled.img`
	max-width: 100%;
	margin: 2rem 0;
`;
