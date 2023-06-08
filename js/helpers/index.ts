/**
 * suite of helper functions to translate english to pig latin
 * @author: Steven Balagtas
 */

import { VOWELS } from "../const";

/**
 * helper to check if a letter is a vowel (more efficient than checking for consonants)
 * @param letter
 * @returns boolean
 */
export const isVowel = (letter: string) => {
  if (letter.length > 1) throw new Error("Multiple characters were passed in");

  if (!/^[a-zA-Z]$/.test(letter))
    throw new Error("Character is not an alphabetic character");

  if (VOWELS.includes(letter.toLowerCase())) return true;
  return false;
};

/**
 * translates english to pig latin
 * @param phrase string of the english phrase being translated
 * @returns string of the pig latin translated phrase
 */
export const translate = (phrase: string) => {
  // TODO: translate...
  return phrase;
};
