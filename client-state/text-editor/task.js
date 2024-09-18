let editorText = localStorage.getItem("textEditorContent");
if (editorText) {
    document.getElementById("editor").value = editorText;
}

document.getElementById("editor").addEventListener("input", function() {
    localStorage.setItem("textEditorContent", this.value);
});

document.getElementById("clear").addEventListener("click", function() {
    localStorage.removeItem("textEditorContent");
    document.getElementById("editor").value = "";
});
