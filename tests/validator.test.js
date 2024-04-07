import { expect } from "chai";
import { describe, it } from "mocha";

import { validateCinnabarMarkup } from "../src/validator.js";

describe("Cinnabar Markup Validator", () => {
  it("should validate a correct Cinnabar Markup structure", async () => {
    const validMarkup = [
      {
        data: ["Cinnabar Forge Text Markup"],
        level: 1,
        type: "header",
      },
      {
        data: [
          "This is a very",
          {
            highlight: "italic",
            text: "light",
          },
          {
            glueLastText: true,
            text: ", but",
          },
          {
            highlight: "bold",
            text: "robust",
          },
          "text specification.",
          "It has linear structure which lacks of any nestings.",
          "Parts of the paragraph are joined with a space by default, but you can glue text to the part, like",
          {
            highlight: "bold",
            text: "this",
          },
          {
            glueLastText: true,
            text: ".",
          },
          "We also have",
          {
            link: "https://example.com",
            text: "links!",
          },
        ],
        type: "paragraph",
      },
      {
        data: ["Headers"],
        level: 2,
        type: "header",
      },
      {
        data: ["We can specify"],
        type: "paragraph",
      },
      {
        data: ["Headers"],
        level: 3,
        type: "header",
      },
      {
        data: ["As much headers"],
        type: "paragraph",
      },
      {
        data: ["Headers"],
        level: 4,
        type: "header",
      },
      {
        data: ["As we need"],
        type: "paragraph",
      },
      {
        data: ["Code"],
        level: 1,
        type: "header",
      },
      {
        codeLanguage: "javascript",
        data: [
          "// Each data item with 'code' type is treated as a single line",
          "function foo(bar) {",
          "  return true;",
          "}",
        ],
        type: "code",
      },
    ];
    expect(await validateCinnabarMarkup(validMarkup)).to.be.true;
  });

  it("should invalidate an incorrect Cinnabar Markup structure", async () => {
    const invalidMarkup = [
      {
        type: "h1",
        value: [{ highlight: "i" }],
      },
    ];
    expect(await validateCinnabarMarkup(invalidMarkup)).to.be.false;
  });
});
