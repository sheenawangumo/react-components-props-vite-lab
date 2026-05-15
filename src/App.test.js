import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog name", () => {
  render(<App />);
  const heading = screen.getByText(/Sheena's Blog/i);
  expect(heading).toBeInTheDocument();
});
