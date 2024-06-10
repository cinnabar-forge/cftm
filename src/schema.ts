export type CftmElement = {
  type: CftmElementType;
  data: CftmData;
  level?: number;
  codeLanguage?: string;
};
export type CftmElementType =
  | "header"
  | "paragraph"
  | "code"
  | "item"
  | "row"
  | "gallery";
export type CftmHighlightType = "bold" | "italic" | "underline" | "code";
export type CftmData = (
  | {
      text: string;
      highlight?: CftmHighlightType;
      glueLastText?: boolean;
      link?: string;
      glueLastLink?: boolean;
      mergeCellBelow?: boolean;
    }
  | string
)[];
export type CftmSchema = CftmElement[];

export const CINNABAR_MARKUP_SCHEMA = {
  $schema: "http://json-schema.org/draft-07/schema#",
  items: {
    additionalProperties: false,
    properties: {
      codeLanguage: {
        title: "Language name to suggest specific code highlight",
        type: "string",
      },
      data: {
        items: {
          anyOf: [
            {
              additionalProperties: false,
              properties: {
                glueLastLink: { type: "boolean" },
                glueLastText: { type: "boolean" },
                highlight: {
                  enum: ["bold", "italic", "underline", "code"],
                  type: "string",
                },
                link: { type: "string" },
                mergeCellBelow: { type: "boolean" },
                text: { type: "string" },
              },
              required: ["text"],
              title: "Text with options",
              type: "object",
            },
            { title: "Default text", type: "string" },
          ],
        },
        title: "List of text data for this line/row",
        type: "array",
      },
      level: {
        default: 1,
        minimum: 1,
        title: "Number to specify header and list deepening",
        type: "integer",
      },
      type: {
        enum: ["header", "paragraph", "code", "item", "row", "gallery"],
        title: "Type of this line/row",
        type: "string",
      },
    },
    required: ["type", "data"],
    type: "object",
  },
  title: "Cinnabar Forge Text Markup",
  type: "array",
};
