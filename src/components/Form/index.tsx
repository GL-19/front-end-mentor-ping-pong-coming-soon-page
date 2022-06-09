import { FormEvent, useState } from "react";
import { FormContainer, Input, Button, ErrorMsg } from "./styles";

const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

interface FormProps {
	onSubmit: (email: string) => void;
}

export function Form({ onSubmit }: FormProps) {
	const [email, setEmail] = useState("");
	const [invalidEmail, setInvalidEmail] = useState(false);

	function handleSubmit(event: FormEvent<InnerHTML>): void {
		event.preventDefault();
		setInvalidEmail(false);

		if (!regex.test(email)) {
			setInvalidEmail(true);
		} else {
			onSubmit(email);
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
