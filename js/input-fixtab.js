/* Intercepts tab events to the inputs,
   and then puts a real tab into the inputs */

inputs = document.querySelectorAll("#inv-shell")
for (let input of inputs) {
  input.addEventListener("keydown", function(e) {
    let start = this.selectionStart,
        end = this.selectionEnd
    if (e.key === "Tab") {
      e.preventDefault()
      input.value = input.value.substring(0, start)
                    + "\t"
                    + input.value.substring(end)

      this.selectionStart = this.selectionEnd =
      start + 1
    }
  })
}
