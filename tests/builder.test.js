import { expect } from "chai";
import { describe, it } from "mocha";

import { CinnabarMarkupBuilder } from "../src/builder.js";
import { validateCinnabarMarkup } from "../src/validator.js";

describe("Cinnabar Markup Builder", () => {
  it("should build a correct Cinnabar Markup", () => {
    const validMarkup = new CinnabarMarkupBuilder()
      .addHeader(1, "SuperApp")
      .addParagraph("This is a new paragraph, but we can")
      .highlight("highlight")
      .text("special parts of it.")
      .build();

    console.log(validMarkup);

    expect(validateCinnabarMarkup(validMarkup)).to.be.true;
  });
});
