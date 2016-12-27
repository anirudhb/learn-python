/* Automatically expands the input's width to fill the remaining
   space of the parent as soon as the window loads */

window.addEventListener("load", function() {
  let inputs = document.querySelectorAll("#inv-shell")
  for (let input of inputs) {
    let parent = input.parentNode
    let sibling = parent.children[0]
    let siblings = []
    let parentWidth = parent.clientWidth - 1
    let siblingsWidth = 0
    let computedWidth = null
    while (sibling && sibling.nodeType === 1 && sibling !== input) {
      siblings.push(sibling);
      sibling = sibling.nextElementSibling || sibling.nextSibling
    }
    for (let sibling of siblings) {
      siblingsWidth += sibling.offsetWidth
    }
    computedWidth = (parentWidth - siblingsWidth).toString() + "px"
    input.style.width = computedWidth
  }
})
