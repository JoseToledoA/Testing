const { assert } = require("chai");
const { ohce, isPalindrome, salute, stop } = require("../src/ohce");

describe("ohce", () => {
  it("should reverse input string", () => {
    assert.equal(ohce("hola"), "aloh");
    assert.equal(ohce("oto"), "oto");
    assert.equal(ohce("sebas"), "sabes");
    assert.equal(ohce("chao"), "oahc");
  });

  it("should detect palindromes", () => {
    assert.isTrue(isPalindrome("oto"));
    assert.isTrue(isPalindrome("ana"));
    assert.isTrue(isPalindrome("reconocer"));
    assert.isTrue(isPalindrome("oro"));
  });

  it("should not detect non-palindromes", () => {
    assert.isFalse(isPalindrome("sebas"));
    assert.isFalse(isPalindrome("hola"));
    assert.isFalse(isPalindrome("chao"));
    assert.isFalse(isPalindrome("python"));
  });

  it("should salute in the morning", () => {
    const name = "Seba";
    const time = new Date("2023-09-01T09:20:00");
    assert.equal(salute(name, time), `Buenos días ${name}!`);
  });

  it("should salute in the afternoon", () => {
    const name = "Seba";
    const time = new Date("2023-09-01T16:00:00");
    assert.equal(salute(name, time), `Buenas tardes ${name}!`);
  });

  it("should salute at night", () => {
    const name = "Seba";
    const time = new Date("2023-09-01T23:00:00");
    assert.equal(salute(name, time), `Buenas noches ${name}!`);
  });

  it("should stop", () => {
    assert.isTrue(stop("Stop!"));
    assert.isFalse(stop("Continue!"));
  });
});
