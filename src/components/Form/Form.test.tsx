/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { Form } from "./";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "../../styles/themes";

describe("Footer", () => {
	it("should render correctly with default props", () => {
		const screen = render(
			<ThemeProvider theme={themes}>
				<Form />
			</ThemeProvider>
		);

		const button = screen.getByText("Notify Me");
		const input = screen.getByPlaceholderText("Your email address");
		const errorMsg = screen.queryByText("Please provide a valid email address");
		const formContainer = screen.container;

		expect(formContainer).toBeInTheDocument();
		expect(button).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(errorMsg).not.toBeInTheDocument();
	});

	it("should render error message if submitted with empty input", () => {
		const screen = render(
			<ThemeProvider theme={themes}>
				<Form />
			</ThemeProvider>
		);

		const messageBeforeSubmit = screen.queryByText(
			"Please provide a valid email address"
		);

		expect(messageBeforeSubmit).not.toBeInTheDocument();

		const button = screen.getByText("Notify Me");
		fireEvent.click(button);

		const messageAfterSubmit = screen.getByText("Please provide a valid email address");

		expect(messageAfterSubmit).toBeInTheDocument();
	});

	it("should change input value correctly", () => {
		const screen = render(
			<ThemeProvider theme={themes}>
				<Form />
			</ThemeProvider>
		);

		const input = screen.getByPlaceholderText("Your email address") as HTMLInputElement;

		fireEvent.change(input, { target: { value: "test" } });

		expect(input.value).toBe("test");
	});

	it("should render error message if submitted without valid email", () => {
		const screen = render(
			<ThemeProvider theme={themes}>
				<Form />
			</ThemeProvider>
		);

		const input = screen.getByPlaceholderText("Your email address") as HTMLInputElement;
		const button = screen.getByText("Notify Me");

		fireEvent.change(input, { target: { value: "test" } });

		fireEvent.click(button);

		const message = screen.getByText("Please provide a valid email address");

		expect(message).toBeInTheDocument();
	});
});
