
const inputElement = document.getElementById("input-todo1")
const inputElement2 = document.getElementById("input-todo2")
const inputElement3 = document.getElementById("input-todo3")
const container = document.getElementById("cards-container1")
const container2 = document.getElementById("cards-container2")
const container3 = document.getElementById("cards-container3")
const addButton = document.getElementById("add-button1")
const addButton2 = document.getElementById("add-button2")
const addButton3 = document.getElementById("add-button3")

// 追加ボタンを押したときの処理を登録
// addButton.onclick = function() {
//   // テキストをとりだす
//   const text = inputElement.value

//   // カードを追加する
//   const card = document.createElement("div")
//   card.className = "card"

//   // テキストを表示する部分を作る
//   const todo = document.createElement("div")
//   todo.className = "todo"
//   todo.textContent = text
//   card.append(todo)

//   // 削除ボタンを作る
//   const deleteButton = document.createElement("div")
//   deleteButton.className = "delete"

//   // 削除ボタンを押したときの処理を登録
//   deleteButton.onclick = function() {
//     // カードを削除する
//     card.remove()
//   }
//   // 削除ボタン を card の中に追加する
//   card.append(deleteButton)
//   // card を container の中に追加する
//   container.append(card)

//   // 入力欄を空にする
//   inputElement.value = ""
// }



// ↓コードを意味のある単位でまとめる
// 追加ボタンを押したときの処理を登録
  addButton.onclick = function() {
    // カードを作成する
    // createCard(text)のtext部分をinputelement.valueとしている
    const card = createCard(inputElement.value)
    container.append(card)
  
    // 入力欄を空にする
    inputElement.value = ""
}

addButton2.onclick = function() {
  // カードを作成する
  // createCard(text)のtext部分をinputelement.valueとしている
  const card = createCard(inputElement.value)
  container2.append(card)

  // 入力欄を空にする
  inputElement2.value = ""
}

addButton3.onclick = function() {
  // カードを作成する
  // createCard(text)のtext部分をinputelement.valueとしている
  const card = createCard(inputElement.value)
  container3.append(card)

  // 入力欄を空にする
  inputElement3.value = ""
}
 

// 共通の処理：テキストからカードを作成する
  const createCard = function(text) {
    // カードの枠を作る
    const card = document.createElement("div")
    card.className = "card"
  
    // テキストを表示する部分を作る
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    card.append(todo)
  
    // 削除ボタンを作る
    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"
  
    // 削除ボタンを押したときの処理を登録
    deleteButton.onclick = function() {
      // カードを削除する
      card.remove()
    }
    card.append(deleteButton)
  
        return card
  }


// ↓発展１エンターキー
  inputElement.onkeydown = function(e) {
    if (e.keyCode === 13) {
      // カードを作成する
      // createCard(text)のtext部分をinputelement.valueとしている
      const card = createCard(inputElement.value)
      container.append(card)
    
      // 入力欄を空にする
      inputElement.value = ""
    } return false;
  }

  inputElement2.addEventListener("keydown", function(e) {
    if (e.key =='Enter') {
      // カードを作成する
      // createCard(text)のtext部分をinputelement.valueとしている
      const card = createCard(inputElement2.value)
      container2.append(card)
    
      // 入力欄を空にする
      inputElement2.value = ""
    } return false;
  })

  inputElement3.addEventListener("keydown", function(e) {
    if (e.key =='Enter') {
      // カードを作成する
      // createCard(text)のtext部分をinputelement.valueとしている
      const card = createCard(inputElement3.value)
      container3.append(card)
    
      // 入力欄を空にする
      inputElement3.value = ""
    } return false;
  })

  
