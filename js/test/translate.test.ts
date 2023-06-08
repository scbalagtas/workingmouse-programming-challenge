/**
 * Test suite for the translate helper function
 * @author: Steven Balagtas
 */

import { expect } from "chai";
import { PHRASES } from "../const";
import { isVowel, translate } from "../helpers";

describe("Translate English to Pig Latin", function () {
  Object.keys(PHRASES).map((phrase) => {
    it(`should translate ${phrase}`, () => {
      expect(translate(phrase)).to.eq(PHRASES[phrase]);
    });
  });
});

describe("Error cases", function () {
  it(`should throw 'Multiple characters were passed in'`, () => {
    expect(() => isVowel("ab")).to.throw("Multiple characters were passed in");
  });

  it(`should throw 'Character is not an alphabetic character'`, () => {
    expect(() => isVowel("1")).to.throw(
      "Character is not an alphabetic character"
    );
  });
});
