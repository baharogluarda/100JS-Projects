let btnAddEl = document.getElementById("btn");
let appDiv = document.getElementById("app");

window.onload = () => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach(createNoteElement);
};

btnAddEl.onclick = () => {
  createNoteElement("");
};

function createNoteElement(noteContent) {
  let textarea = document.createElement("textarea");
  textarea.setAttribute("cols", "30");
  textarea.setAttribute("rows", "10");
  textarea.setAttribute("class", "note");
  textarea.setAttribute("placeholder", "Empty Note");
  textarea.value = noteContent;

  appDiv.insertBefore(textarea, btnAddEl);

  textarea.addEventListener("input", saveNotesToLocalStorage);

  textarea.addEventListener("dblclick", () => {
    if (confirm("Are you sure you want to delete this note?")) {
      appDiv.removeChild(textarea);
      saveNotesToLocalStorage();
    }
  });
}

function saveNotesToLocalStorage() {
  let notes = Array.from(document.querySelectorAll(".note")).map(
    (note) => note.value
  );
  localStorage.setItem("notes", JSON.stringify(notes));
}
