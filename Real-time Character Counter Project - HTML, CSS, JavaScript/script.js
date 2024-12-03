let textareaEl = document.getElementById("textarea");
let totalcounterEl = document.getElementById("total-counter");
let remainingcounterEl = document.getElementById("remaining-counter");

let textareaLength;
let maxLength = textareaEl.maxLength;

textareaEl.addEventListener("input", updateStats);

function updateStats() {
  textareaLength = textareaEl.value.length;
  totalcounterEl.innerHTML = textareaLength;
  remainingcounterEl.innerHTML = maxLength - textareaLength;
}
