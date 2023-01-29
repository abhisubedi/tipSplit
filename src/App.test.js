import { render, screen } from "@testing-library/react";
import TopSection from "./components/TopSection";

test("top section renders", () => {
  render(<TopSection />);
  const linkElement = screen.getByTestId("topSection");
  expect(linkElement).toBeInTheDocument();
});
