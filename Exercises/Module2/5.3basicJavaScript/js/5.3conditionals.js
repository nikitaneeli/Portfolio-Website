function compare() {
  let answer = document.querySelector("#userInput");
  answer = answer.value;
  answer = Number(answer);
  let reaction = document.querySelector("#response");

  switch (true) {
    case answer === 24:
      reaction.innerHTML = answer + " is correct!";
      break;
    case answer < 19:
      reaction.innerHTML = answer + " is way too low!";
      break;
    case answer > 30:
      reaction.innerHTML = answer + " is way too high!";
      break;
    case answer > 24 && answer < 31:
      reaction.innerHTML = answer + " is too high but close!";
      break;
    case answer < 24 && answer > 18:
      reaction.innerHTML = answer + " is too low but close!";
      break;
  }
}
