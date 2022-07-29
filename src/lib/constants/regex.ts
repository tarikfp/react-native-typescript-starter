// Regex
export const POSTAL_CODE_REGEX = /^[0-9]{5,6}(?:-[0-9]{4,5})?$/;
export const ALPHABET_REGEX = /^[A-Za-z ğüışöçßÂİĞÜŞÖÇ]+$/;
export const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
export const ALPHABET_WITHOUT_SPACE_REGEX = /^[A-Za-zğßüışöçİĞÜŞÖÇ]+$/;
export const PHONE_NUMBER_REGEX =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
