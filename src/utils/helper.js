export const replaceCaracters = (text) => {
  const replaceText = text

    .trim()

    .toLowerCase()

    .replace(new RegExp("[ÁÀÂÃ]", "gi"), "a")

    .replace(new RegExp("[ÉÈÊ]", "gi"), "e")

    .replace(new RegExp("[ÍÌÎ]", "gi"), "i")

    .replace(new RegExp("[ÓÒÔÕ]", "gi"), "o")

    .replace(new RegExp("[ÚÙÛ]", "gi"), "u")

    .replace(new RegExp("[Ç]", "gi"), "c");

  return replaceText;
};

export const formatDate = (date) => {
  let dateType = new Date(date);
  let dateFormatad =
    dateType.getMonth() +
    1 +
    "/" +
    dateType.getDate() +
    "/" +
    dateType.getFullYear();
  return dateFormatad;
};
