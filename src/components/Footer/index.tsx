import icon from "../../assets/images/favicon.png";
import { FooterContainer, Icon, IconsContainer } from "./styles";

export function Footer() {
	return (
		<FooterContainer>
			<IconsContainer>
				<Icon src={icon} alt="facebook-icon" />
				<Icon src={icon} alt="twitter-icon" />
				<Icon src={icon} alt="instagram-icon" />
			</IconsContainer>
			<p>&copy; Copyright Ping. All rights reserved.</p>
		</FooterContainer>
	);
}
