function checkAnswer(answer) {
  let result = document.getElementById("result");
  if (answer === "language") {
    result.textContent = "Correct Answer!";
  } else {
    result.textContent = "Wrong Answer!";
  }
}
