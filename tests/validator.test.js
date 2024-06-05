import { expect } from "chai";
import { describe, it } from "mocha";

import { validateCinnabarMarkup } from "../src/validator.js";

describe("Cinnabar Markup Validator", () => {
  it("should validate a correct Cinnabar Markup structure", () => {
    const validMarkup = [
      { type: "h1", value: [{ text: "Cinnabar Forge Simple Text Schema" }] },
      {
        type: "p",
        value: [
          { text: "A very" },
          { highlight: "i", text: "light" },
          { text: "schema. It can:" },
        ],
      },
      {
        multiValue: [
          [{ text: "Simple list item" }],
          [{ text: "List item with a" }, { highlight: "b", text: "highlight" }],
        ],
        type: "ul",
      },
      {
        codeLanguage: "javascript",
        type: "code",
        value: [
          { text: "function simpleCheck(value) {" },
          { text: "  return true;" },
          { text: "}" },
        ],
      },
    ];
    expect(validateCinnabarMarkup(validMarkup)).to.be.true;
  });

  it("should invalidate an incorrect Cinnabar Markup structure", () => {
    const invalidMarkup = [
      {
        type: "h1",
        value: [{ highlight: "i" }],
      },
    ];
    expect(validateCinnabarMarkup(invalidMarkup)).to.be.false;
  });
});
