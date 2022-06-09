/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./";
import { ThemeProvider } from "styled-components";
import { themes } from "../../styles/themes";

describe("Header", () => {
	it("Should render correctly", () => {
		const screen = render(
			<ThemeProvider theme={themes}>
				<Header />
			</ThemeProvider>
		);

		const logo = screen.getByAltText("logo");

		expect(logo).toBeInTheDocument();
	});
});
