const button = document.getElementById("button")


// button 要素と click イベント
const alertMessage = function() {
    alert("クリックしたね")
  }
  
// alertMessage() // アラートが表示される

button.onclick = alertMessage

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

document.onkeydown = function(e) {
    console.log(e.key)
  }