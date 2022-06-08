import { FormContainer, Input, Button } from "./styles";

export function Form() {
	return (
		<FormContainer action="">
			<Input type="text" placeholder="Your email address" isActive={false} />
			<Button>Notify Me</Button>
		</FormContainer>
	);
}
