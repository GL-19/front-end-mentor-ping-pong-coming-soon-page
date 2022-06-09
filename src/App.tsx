import dashboard from "./assets/images/dashboard.png";

import { Dashboard, Main, TextWrapper } from "./styles";
import { Form, Header, Footer } from "./components";

function App() {
	return (
		<Main>
			<Header />

			<TextWrapper>
				<h1>
					We are launching <strong>soon!</strong>
				</h1>
				<h2>Subscribe and get notified</h2>
			</TextWrapper>

			<Form onSubmit={(email: string) => alert(`${email} cadastrado com sucesso`)} />

			<Dashboard src={dashboard} alt="dashboard" />

			<Footer />
		</Main>
	);
}

export default App;
