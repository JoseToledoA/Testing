function ohce(string) {
  return string.split("").reverse().join("");
}

function isPalindrome(string) {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
}

function salute(name, time) {
  if (time.getHours() >= 6 && time.getHours() < 12) {
    return `Buenos días ${name}!`;
  }

  if (time.getHours() >= 12 && time.getHours() < 20) {
    return `Buenas tardes ${name}!`;
  }

  return `Buenas noches ${name}!`;
}

function stop(string) {
  return string === "Stop!";
}

module.exports = { ohce, isPalindrome, salute, stop };
