/**
 * Test suite for the translate helper function
 * @author: Steven Balagtas
 */

import { expect } from "chai";
import { PHRASES } from "../const";
import { translate } from "../helpers";

describe("Translate English to Pig Latin", function () {
  Object.keys(PHRASES).map((phrase) => {
    it(`should translate ${phrase}`, () => {
      expect(translate(phrase)).to.eq(PHRASES[phrase]);
    });
  });
});
