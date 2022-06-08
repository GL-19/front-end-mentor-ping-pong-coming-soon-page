import styled from "styled-components";
import { mediaQuery } from "../../styles/GlobalStyle";

export const HeaderContainer = styled.header`
	width: 100%;
	height: 3rem;

	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: ${mediaQuery.tablet}) {
		img {
			max-width: 5rem;
			width: 20%;
		}
	} ;
`;
