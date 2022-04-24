const container = document.getElementById("memo-container")
const inputElement = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")


// addButton.onclick = function() {
//     const memo = createMemo(inputElement.value)
//     container.append(memo)
//     console.log(inputElement.value)

  
//     inputElement.value = ""
// }


// const createMemo = function(text) {
//     const memo = document.createElement("div")
//     memo.className = "memo"
  
//     const todo = document.createElement("div")
//     todo.className = "todo"
//     todo.textContent = text
//     memo.append(todo)
  

//       return memo
// }

addButton.onclick = function() {
    console.log(inputElement.value)

    const memo = document.createElement("div")
    memo.className = "memo"
    container.append(memo)
    memo.textContent = inputElement.value
    inputElement.value = ""

    const deleteButton = document.createElement("button")
    deleteButton.className = "deleteButton"
    memo.append(deleteButton)
    deleteButton.textContent = "削除"

    deleteButton.onclick = function() {
        memo.remove()
    }
}


