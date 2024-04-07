import Ajv from "ajv";
import fs from "fs";
import path from "path";

/**
 *
 * @param {import("../types/schema").CinnabarForgeTextMarkup[]} data
 * @returns {Promise<boolean>}
 */
export async function validateCinnabarMarkup(data) {
  const schema = JSON.parse(
    await fs.promises.readFile(
      path.resolve("./schemas/cinnabar-markup.schema.json"),
      "utf-8",
    ),
  );

  const ajv = new Ajv();
  const validate = ajv.compile(schema);

  if (!validate(data)) {
    console.error(
      `Configuration validation error: ${validate.errors.map((err) => err.message).join(", ")}`,
    );
    return false;
  }

  return true;
}
