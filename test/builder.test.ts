import { expect } from "chai";
import { describe, it } from "mocha";

import { CftmBuilder } from "../src/builder.js";
import { validateCinnabarMarkup } from "../src/validator.js";

describe("Cinnabar Markup Builder", () => {
  it("should build a correct Cinnabar Markup", () => {
    const validMarkup = new CftmBuilder()
      .addHeader(1, "SuperApp")
      .addParagraph("This is a new paragraph, but we can")
      .appendHighlight("bold", "highlight")
      .appendText("special parts of it.")
      .build();

    expect(validateCinnabarMarkup(validMarkup)).to.be.true;
  });
});
