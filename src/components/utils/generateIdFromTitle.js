// Function to generate an ID from the title
export const generateIdFromTitle = (title) => {
  // Remove leading numbers followed by a dot and trim spaces
  const id = title.replace(/^\d+\.\s*/, "").trim();
  // Remove question marks
  const idWithoutQuestionMarks = id.replace(/\?/g, "");
  // Replace spaces, dots, and question marks with dashes and convert to lowercase
  return idWithoutQuestionMarks.toLowerCase().replace(/[ .?]/g, "-");
};
