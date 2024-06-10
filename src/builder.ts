import {
  CftmSchema,
  CftmData,
  CftmElement,
  CftmHighlightType,
} from "./schema.js";

/**
 * Builder class for creating Cinnabar Forge Text Markup.
 */
export class CftmBuilder {
  markup: CftmSchema;
  currentElement: CftmElement | null;

  /**
   * Creates an instance of CftmBuilder.
   */
  constructor() {
    this.markup = [];
    this.currentElement = null;
  }

  /**
   * Adds an element to the markup.
   * @param {CftmElement} params Parameters for the new element.
   * @returns {CftmBuilder} The instance of this builder.
   * @private
   */
  addElement(params: CftmElement): CftmBuilder {
    const element = params;
    this.markup.push(element);
    this.currentElement = element;
    return this;
  }

  /**
   * Appends multiple data items to the current element's data array.
   * @param {CftmData} data The data to append.
   * @returns {CftmBuilder} The instance of this builder.
   * @private
   */
  appendData(data: CftmData): CftmBuilder {
    if (!this.currentElement) {
      this.addElement({ data: [], type: "paragraph" });
    }
    if (this.currentElement != null) {
      this.currentElement.data.push(...data);
    }
    return this;
  }

  /**
   * Appends a single data item to the current element's data array.
   * @param {CftmData[number]} datum The data item to append.
   * @returns {CftmBuilder} The instance of this builder.
   * @private
   */
  appendDatum(datum: CftmData[number]): CftmBuilder {
    if (!this.currentElement) {
      this.addElement({ data: [], type: "paragraph" });
    }
    if (this.currentElement != null) {
      this.currentElement.data.push(datum);
    }
    return this;
  }

  /**
   * Adds a code block to the markup.
   * @param {string} language The programming language of the code.
   * @param {CftmData} lines The lines of code.
   * @returns {CftmBuilder} The instance of this builder.
   */
  addCode(language: string, lines: CftmData): CftmBuilder {
    this.addElement({
      codeLanguage: language,
      data: [],
      type: "code",
    }).appendData(lines);
    return this;
  }

  /**
   * Adds a header to the markup.
   * @param {number} level The level (depth) of the header.
   * @param {string} text The header text.
   * @returns {CftmBuilder} The instance of this builder.
   */
  addHeader(level: number, text: string): CftmBuilder {
    this.addElement({ data: [], level, type: "header" }).appendDatum({
      text,
    });
    return this;
  }

  /**
   * Adds a paragraph to the markup.
   * @param {string | undefined} text The paragraph text.
   * @returns {CftmBuilder} The instance of this builder.
   */
  addParagraph(text: string | undefined): CftmBuilder {
    this.addElement({ data: [], type: "paragraph" });
    if (text != null) {
      this.appendDatum({ text });
    }
    return this;
  }

  appendHighlight(highlight: CftmHighlightType, text: string): CftmBuilder {
    this.appendDatum({ highlight, text });
    return this;
  }

  appendText(text: string): CftmBuilder {
    this.appendDatum({ text });
    return this;
  }

  /**
   * Builds the markup and returns it.
   * @returns {CftmSchema} The markup.
   */
  build(): CftmSchema {
    return this.markup;
  }
}
