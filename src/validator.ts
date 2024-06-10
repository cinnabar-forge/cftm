import Ajv from "ajv";

import { CINNABAR_MARKUP_SCHEMA, CftmSchema } from "./schema.js";

/**
 * Checks the markup data against the schema
 * @param {CftmSchema} data markup data
 * @returns {boolean} true if the data compiles to the schema, false otherwise
 */
export function validateCinnabarMarkup(data: CftmSchema): boolean {
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
