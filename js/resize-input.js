/* Simple JavaScript code to resize the input
   textarea (for the shell) automatically, depending
   on how many characters there are */

window.addEventListener("load", function() {
  let inputs = document.querySelectorAll("#inv-shell");
  for (let input of inputs) {
    input.addEventListener("keyup", function() {
      this.style.height = "1px";
      this.style.height = (this.scrollHeight) + "px";
    })
    let event = new CustomEvent("keyup")
    input.dispatchEvent(event)
  }
})
