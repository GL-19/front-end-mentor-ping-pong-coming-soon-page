import { FormEvent, useState } from "react";
import { FormContainer, Input, Button, ErrorMsg } from "./styles";

const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export function Form() {
	const [email, setEmail] = useState("");
	const [invalidEmail, setInvalidEmail] = useState(false);

	function handleSubmit(event: FormEvent<InnerHTML>): void {
		event.preventDefault();

		if (!regex.test(email)) {
			setInvalidEmail(true);
		} else {
			setInvalidEmail(false);
			alert("Enviado com sucesso");
		}
	}

	return (
		<FormContainer action="submit" onSubmit={handleSubmit}>
			<Input
				placeholder="Your email address"
				isActive={invalidEmail}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			{invalidEmail && <ErrorMsg>Please provide a valid email address</ErrorMsg>}

			<Button type="submit">Notify Me</Button>
		</FormContainer>
	);
}
