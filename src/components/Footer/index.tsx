import { faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { FooterContainer, Icon, IconsContainer } from "./styles";

export function Footer() {
	return (
		<FooterContainer>
			<IconsContainer>
				<Icon icon={faFacebookF} data-testid="facebook-icon" />
				<Icon icon={faTwitter} data-testid="twitter-icon" />
				<Icon icon={faInstagram} data-testid="instagram-icon" />
			</IconsContainer>
			<p>&copy; Copyright Ping. All rights reserved.</p>
		</FooterContainer>
	);
}
