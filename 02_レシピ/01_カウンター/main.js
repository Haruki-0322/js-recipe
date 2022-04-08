const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const twoTimesButton = document.getElementById("twoTimes-button")
const minusButton = document.getElementById("minus-button")

let count = 0

plusButton.onclick = function() {
  count += 1
  display.textContent = count
}

twoTimesButton.onclick = () => {
  count *= 2
  display.textContent = count
}

minusButton.onclick = () => {
  count -= 1
  display.textContent = count
}

