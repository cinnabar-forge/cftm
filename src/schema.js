export const CINNABAR_MARKUP_SCHEMA = {
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    textElement: {
      additionalProperties: false,
      properties: {
        highlight: { enum: ["b", "i", "u", "code"], type: "string" },
        text: { type: "string" },
      },
      required: ["text"],
      type: "object",
    },
  },
  items: {
    additionalProperties: false,
    properties: {
      codeLanguage: { type: "string" },
      multiValue: {
        items: {
          items: { $ref: "#/definitions/textElement" },
          type: "array",
        },
        type: "array",
      },
      type: { type: "string" },
      value: {
        items: { $ref: "#/definitions/textElement" },
        type: "array",
      },
    },
    required: ["type"],
    type: "object",
  },
  title: "Cinnabar Markup Schema",
  type: "array",
};
