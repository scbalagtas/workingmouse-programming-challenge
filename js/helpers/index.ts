/**
 * suite of helper functions to translate english to pig latin
 * @author: Steven Balagtas
 */

import { VOWELS } from "../const";

/**
 * little helper to validate input for helpers below
 * @param letter
 */
const validateLetter = (letter: string) => {
  if (letter.length > 1) throw new Error("Multiple characters were passed in");

  if (!/^[a-zA-Z]$/.test(letter))
    throw new Error("Character is not an alphabetic character");
};

/**
 * helper to check if a letter is a vowel (more efficient than checking for consonants)
 * @param letter
 * @returns boolean
 */
export const isVowel = (letter: string) => {
  validateLetter(letter);

  if (VOWELS.includes(letter.toLowerCase())) return true;
  return false;
};

/**
 * helper to check if a letter is capital
 * @param letter
 * @returns boolean
 */
export const isCapital = (letter: string) => {
  validateLetter(letter);

  if (letter !== letter.toLowerCase()) return true;
  return false;
};

/**
 * translates english to pig latin
 * @param phrase string of the english phrase being translated
 * @returns string of the pig latin translated phrase
 */
export const translate = (phrase: string) => {
  // split phrase into array of words
  const words = phrase.split(" ");

  // map through words and translate each one
  const translatedWords = words.map((word) => {
    // get the individual characters
    const characters = word.split("");

    // don't need to know which specific characters to move but only how many to move
    let numOfCharactersToMove = 0;

    // iterate through the characters of the word and decide whether to shift characters
    for (const character of characters) {
      // takes into account grammar characters like commas and apostrophes at the end of words
      // (rare case though as only a handful of english words do not have a vowel
      // and even less or maybe none at all do not have a vowel before an apostrophe)
      // should be an impossible case, but just in case
      if (!/^[a-zA-Z]$/.test(character)) continue;

      // if vowel, break
      if (isVowel(character)) break;

      numOfCharactersToMove++;
    }

    let translatedWord;
    if (numOfCharactersToMove) {
      // consonants case (add "ay")
      const charactersToMove = word.substring(0, numOfCharactersToMove);
      let remainingCharacters = word.substring(numOfCharactersToMove);

      // bonus challenge check, if original word started with a capital, translated word must also start with a capital
      if (isCapital(word.charAt(0))) {
        remainingCharacters =
          remainingCharacters.charAt(0).toUpperCase() +
          remainingCharacters.substring(1);
      }

      // construct the pig latin translation
      translatedWord =
        remainingCharacters + charactersToMove.toLowerCase() + "ay";
    } else {
      // vowel case (add "way")
      translatedWord = word + "way";
    }

    return translatedWord;
  });

  return translatedWords.join(" ");
};
