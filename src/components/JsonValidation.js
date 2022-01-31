export default function JsonValidation(data) {
  const Ajv = require("ajv");
  const ajv = new Ajv();

  ajv.addVocabulary(["label", "score", "text", "show_booking_button"]);

  const schema = {
    type: "object",
    properties: {
      questions: {
        type: "array",
        additionalProperties: false,
        items: {
          type: "object",
          properties: {
            $id: { type: "string" },
            question_text: { type: "string" },
            answers: {
              type: "array",
              additionalProperties: false,
              items: {
                type: "object",
                properties: {
                  $id: { type: "string" },
                  label: { type: "string" },
                  score: { type: "number" },
                },
              },
            },
            next: {
              type: "array",
              anyOf: [
                {
                  type: "object",
                  properties: {
                    answered: { type: "string" },
                    next_question: { type: "string" },
                  },
                },
                {
                  type: "object",
                  properties: {
                    $id: { type: "string" },
                    next_question: { type: "string" },
                    max_score: { type: "number" },
                    outcome: { type: "string" },
                  },
                },
              ],
            },
          },
        },
      },
      outcomes: {
        type: "array",
        additionalProperties: false,
        items: {
          type: "object",
          properties: {
            $id: { type: "string" },
            text: { type: "string" },
            show_booking_button: { type: "boolean" },
          },
        },
      },
    },
  };

  const validate = ajv.compile(schema);

  console.log("aaaa");

  const valid = true; //validate(data);
  console.log("valid", valid);
  if (!valid) {
    console.log(valid);
    console.log(validate.errors);
  }
  return valid;
}
