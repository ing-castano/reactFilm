import { getByText, render } from "@testing-library/react";
import App from "./App";
import { describe, expect, it } from "vitest";

describe("App", () => {
    it("should render component", () => {
        const component = render(<App />);
        expect(component).toBeDefined();
        // codigo para que falle el test
        //const title = component.getByText("PRUEBA TEST");
        //expect(title).toBe("asdasd para que fallee");
    });
});