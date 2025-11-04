const input = document.getElementById("jejtext");
const button = document.getElementById("jejtlacitko");
const output = document.getElementById("jejvystup");
button.addEventListener("click", () => {
  const text = input.value;
  output.textContent = `napsal jsi: ${text}`;
});