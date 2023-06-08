class Program {
  _phrases: Record<string, string> = {
    Hello: "Ellohay",
    "Pig Latin": "Igpay Atinlay",
    "The first month is Janurary": "Ethay irstfay onthmay isway Anuraryjay",
    "The floor is sticky": "Ethay oorflay isway ickystay",
  };

  constructor() {
    for (let english in this._phrases) {
      this._testEquals(
        english,
        this._phrases[english],
        this._translateEnglishToPigLatin(english)
      );
    }
  }

  _translateEnglishToPigLatin(english: string) {
    // TODO
    return "";
  }

  _testEquals(input: string, expect: string, actual: string) {
    if (expect.toLowerCase() == actual.toLowerCase()) {
      if (expect != expect.toLowerCase() && expect == actual) {
        console.log("PASS (Bonus)! " + input + " -> " + actual);
      } else {
        console.log("PASS! " + input + " -> " + actual);
      }
    } else {
      console.log("FAIL!");
      console.log("  Input: " + input);
      console.log("  Expect: " + expect);
      console.log("  Actual: " + actual);
    }
  }
}

new Program();
