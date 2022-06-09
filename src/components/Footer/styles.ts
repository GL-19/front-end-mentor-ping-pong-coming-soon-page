import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FooterContainer = styled.footer`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;

	color: ${({ theme }) => theme.colors.gray};
`;

export const IconsContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.75rem;
`;

export const Icon = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.colors.blue};
	border: ${({ theme }) => theme.colors.gray} 0.1rem solid;
	border-radius: 100%;

	width: 1.33rem;
	height: 1.33rem;
	padding: 0.5rem;

	:hover,
	:active {
		color: white;
		background-color: ${({ theme }) => theme.colors.blue};
		border: ${({ theme }) => theme.colors.blue} 0.1rem solid;
		transition: 0.1s linear;
	}
`;
