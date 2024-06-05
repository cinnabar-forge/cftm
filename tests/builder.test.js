import { expect } from "chai";
import { describe, it } from "mocha";

import { CinnabarMarkupBuilder } from "../src/builder.js";
import { validateCinnabarMarkup } from "../src/validator.js";

describe("Cinnabar Markup Builder", () => {
  it("should build a correct Cinnabar Markup", () => {
    const validMarkup = new CinnabarMarkupBuilder()
      .h1("SuperApp")
      .p("This is a new paragraph, but we can")
      .highlight("b", "highlight")
      .text("special parts of it.")
      .h2("Chapter 1")
      .tag("p")
      .text("This is an another way to add a paragraph.")
      .h2("Chapter 2")
      .tag("p", "This is a yet another way to add a paragraph.")
      .build();

    expect(validateCinnabarMarkup(validMarkup)).to.be.true;
  });
});
