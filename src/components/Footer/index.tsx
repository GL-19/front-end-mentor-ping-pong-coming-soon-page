import { faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { FooterContainer, Icon, IconsContainer } from "./styles";

export function Footer() {
	return (
		<FooterContainer>
			<IconsContainer>
				<Icon icon={faFacebookF} />
				<Icon icon={faTwitter} />
				<Icon icon={faInstagram} />
			</IconsContainer>
			<p>&copy; Copyright Ping. All rights reserved.</p>
		</FooterContainer>
	);
}
