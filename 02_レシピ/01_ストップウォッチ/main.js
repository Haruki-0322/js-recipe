const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
    count += 1
    display.textContent = count / 100
}

let id = null

// nullは 値なし を意味する値

button.onclick = function() {
  if (id === null) {
    // start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
// button.onclickだとボタンを話す瞬間に発動するため正確なタイムが図りづらい。
// 正確に測るためにはmousedown(押した瞬間に発動する)が向いている。