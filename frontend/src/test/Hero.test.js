import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Hero from "../landing_page/home/Hero";

// test suite

describe("Hero component", () => {
  test("renders hero image ", () => {
    render(<Hero />);

    const heroImage = screen.getAllByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});
