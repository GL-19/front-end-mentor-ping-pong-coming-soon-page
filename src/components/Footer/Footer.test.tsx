/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { themes } from "../../styles/themes";
import { Footer } from "./";

describe("Footer", () => {
	it("Should render correctly", () => {
		const screen = render(
			<ThemeProvider theme={themes}>
				<Footer />
			</ThemeProvider>
		);

		expect(screen.getByText(/Copyright Ping. All rights reserved./i)).toBeInTheDocument();
		expect(screen.getByTestId("facebook-icon")).toBeInTheDocument();
		expect(screen.getByTestId("twitter-icon")).toBeInTheDocument();
		expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
	});
});
