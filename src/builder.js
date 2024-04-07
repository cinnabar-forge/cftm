/**
 * Builder class for creating Cinnabar Forge Text Markup.
 */
export class CinnabarMarkupBuilder {
  /**
   * Creates an instance of CinnabarMarkupBuilder.
   */
  constructor() {
    /** @type {import("../types/schema").CinnabarForgeTextMarkup} */
    this.markup = [];
    /** @type {import("../types/schema").CinnabarForgeTextMarkup[number]|null} */
    this.currentElement = null;
  }

  /**
   * Adds an element to the markup.
   * @param {import("../types/schema").CinnabarForgeTextMarkup[number]} params Parameters for the new element.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   * @private
   */
  _addElement(params) {
    const element = params;
    this.markup.push(element);
    this.currentElement = element;
    return this;
  }

  /**
   * Appends multiple data items to the current element's data array.
   * @param {import("../types/schema").ListOfTextDataForThisLineRow} data The data to append.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   * @private
   */
  _appendData(data) {
    if (!this.currentElement) {
      this._addElement({ data: [], type: "paragraph" });
    }
    if (this.currentElement != null) {
      this.currentElement.data.push(...data);
    }
    return this;
  }

  /**
   * Appends a single data item to the current element's data array.
   * @param {import("../types/schema").ListOfTextDataForThisLineRow[number]} datum The data item to append.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   * @private
   */
  _appendDatum(datum) {
    if (!this.currentElement) {
      this._addElement({ data: [], type: "paragraph" });
    }
    if (this.currentElement != null) {
      this.currentElement.data.push(datum);
    }
    return this;
  }

  /**
   * Adds a code block to the markup.
   * @param {import("../types/schema").LanguageNameToSuggestSpecificCodeHighlight} language The programming language of the code.
   * @param {import("../types/schema").ListOfTextDataForThisLineRow} lines The lines of code.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   */
  addCode(language, lines) {
    this._addElement({
      codeLanguage: language,
      data: [],
      type: "code",
    })._appendData(lines);
    return this;
  }

  /**
   * Adds a header to the markup.
   * @param {import("../types/schema").NumberToSpecifyHeaderAndListDeepening} level The level (depth) of the header.
   * @param {string} text The header text.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   */
  addHeader(level, text) {
    this._addElement({ data: [], level, type: "header" })._appendDatum({
      text,
    });
    return this;
  }

  /**
   * Adds a paragraph to the markup.
   * @param {string} text The paragraph text.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   */
  addParagraph(text) {
    this._addElement({ data: [], type: "paragraph" })._appendDatum({ text });
    return this;
  }

  /**
   * Builds the markup and returns it.
   * @returns {import("../types/schema").CinnabarForgeTextMarkup} The markup.
   */
  build() {
    return this.markup;
  }
}
