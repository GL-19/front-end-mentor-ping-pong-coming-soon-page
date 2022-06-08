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

export const Icon = styled.img``;
