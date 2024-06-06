import Ajv from "ajv";

import { CINNABAR_MARKUP_SCHEMA } from "./schema.js";

/**
 * Checks the markup data against the schema
 * @param {object} data markup data
 * @returns {boolean} true if the data compiles to the schema, false otherwise
 */
export function validateCinnabarMarkup(data) {
  const ajv = new Ajv();
  const validate = ajv.compile(CINNABAR_MARKUP_SCHEMA);

  if (!validate(data)) {
    console.error(
      `Configuration validation error: ${validate.errors.map((err) => err.message).join(", ")}`,
    );
    return false;
  }

  return true;
}
