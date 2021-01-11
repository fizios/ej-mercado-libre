import author from "../constants/author";

const validateAuthor = res => {
  if (!res) {
    throw new Error("No response available");
  }

  if (typeof res !== "object") {
    throw new Error("Response no match type");
  }

  const authorKeysLength = Object.keys(author).length;
  if (!res.author) {
    throw new Error("No authorization value");
  }

  if (Object.keys(res.author).length !== authorKeysLength) {
    throw new Error("Unauthorized");
  }

  Object.keys(res.author).forEach(k => {
    if (!author[k]) {
      throw new Error("Unauthorized");
    }
    if (author[k] !== res.author[k]) {
      throw new Error("Unauthorized");
    }
  })
};

export default validateAuthor;
