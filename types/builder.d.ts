import {
  CinnabarForgeTextMarkup,
  LanguageNameToSuggestSpecificCodeHighlight,
  NumberToSpecifyHeaderAndListDeepening,
  ListOfTextDataForThisLineRow,
} from "./schema";

/**
 * Builder class for creating Cinnabar Forge Text Markup.
 */
export class CinnabarMarkupBuilder {
  /** @type {CinnabarForgeTextMarkup} */
  markup: CinnabarForgeTextMarkup;
  /** @type {CinnabarForgeTextMarkup[number]|null} */
  currentElement: CinnabarForgeTextMarkup[number] | null;
  /**
   * Adds an element to the markup.
   * @param {CinnabarForgeTextMarkup[number]} params Parameters for the new element.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   * @private
   */
  private _addElement;
  /**
   * Appends multiple data items to the current element's data array.
   * @param {ListOfTextDataForThisLineRow} data The data to append.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   * @private
   */
  private _appendData;
  /**
   * Appends a single data item to the current element's data array.
   * @param {ListOfTextDataForThisLineRow[number]} datum The data item to append.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   * @private
   */
  private _appendDatum;
  /**
   * Adds a code block to the markup.
   * @param {LanguageNameToSuggestSpecificCodeHighlight} language The programming language of the code.
   * @param {ListOfTextDataForThisLineRow} lines The lines of code.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   */
  addCode(
    language: LanguageNameToSuggestSpecificCodeHighlight,
    lines: ListOfTextDataForThisLineRow,
  ): any;
  /**
   * Adds a header to the markup.
   * @param {NumberToSpecifyHeaderAndListDeepening} level The level (depth) of the header.
   * @param {string} text The header text.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   */
  addHeader(level: NumberToSpecifyHeaderAndListDeepening, text: string): CinnabarMarkupBuilder;
  /**
   * Adds a paragraph to the markup.
   * @param {string} text The paragraph text.
   * @returns {CinnabarMarkupBuilder} The instance of this builder.
   */
  addParagraph(text: string): any;
  /**
   * Builds the markup and returns it.
   * @returns {CinnabarForgeTextMarkup} The markup.
   */
  build(): CinnabarForgeTextMarkup;
}
