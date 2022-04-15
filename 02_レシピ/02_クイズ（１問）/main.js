// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")



// choice1.onclick = function() {
//   feedback.textContent =
//     "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
// }
// choice2.onclick = function() {
//   feedback.textContent =
//     "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
// }
// choice3.onclick = function() {
//   feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
// }



// ↓内容(onclick)と処理(choose)で分ける
// 正解を判定する
// const choose = function(choiceString) {
//     if (choiceString === "ゴリアテ") {
//       feedback.textContent =
//         "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
//     } else if (choiceString === "ゼニガメ") {
//       feedback.textContent =
//         "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
//     } else if (choiceString === "ガニメデ") {
//       feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
//     }
//   }
  
//   choice1.onclick = function() {
//     // ゴリアテを選択
//     choose("ゴリアテ")
//   }
//   choice2.onclick = function() {
//     // ゼニガメを選択
//     choose("ゼニガメ")
//   }
//   choice3.onclick = function() {
//     // ガニメデを選択
//     choose("ガニメデ")
//   }



//   ↓選択肢と選択を分ける
// const choose = function(choiceString) {
//     if (choiceString === 0) {
//       feedback.textContent =
//         "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
//     } else if (choiceString === 1) {
//       feedback.textContent =
//         "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
//     } else {
//       feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
//     }
//   }
  
//   choice1.onclick = function() {
//     // 0 番目の選択肢を選択
//     choose(0)
//   }
//   choice2.onclick = function() {
//     // 1 番目の選択肢を選択
//     choose(1)
//   }
//   choice3.onclick = function() {
//     // 2 番目の選択肢を選択
//     choose(2)
//   }




// ↓フィードバックの内容と正解判定の処理を分ける
//   const feedbacks = [
//     "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
//     "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
//     "正解！ガニメデは、木星の第三惑星だよ！",
//   ]
  
//   // 正解を判定する
//   const choose = function(choiceNumber) {
//     feedback.textContent = feedbacks[choiceNumber]
//   }
  
//   choice1.onclick = function() {
//     // 0 番目の選択肢を選択
//     choose(0)
//   }
//   choice2.onclick = function() {
//     // 1 番目の選択肢を選択
//     choose(1)
//   }
//   choice3.onclick = function() {
//     // 2 番目の選択肢を選択
//     choose(2)
//   }




// ↓クイズの内容と表示の処理を分ける
// クイズの内容
const quiz = {
    text: "このスタンドは誰のでしょう？",
    image: "./images/purple-haze.png",
    choices: [
      {
        text: "パンナコッタ・フーゴ",
        feedback:
          "正解！フーゴは「パープルヘイズ」というスタンドを有するブチャラティチームのブレーンだよ！",
      },
      {
        text: "トニオ・トラサルディ",
        feedback: "残念！トニオは「パールジャム」というスタンドを持っている杜王町の料理人だよ！",
      },
      {
        text: "小林玉美",
        feedback: "残念！玉美は康一君の舎弟だよ！",
      },
      {
        text: "ディオ・ブランドー",
        feedback: "残念！ディオはジョナサン・ジョースターの宿敵だよ！",
      },
    ],
  }


  const choice1 = document.createElement("button")
  const choice2 = document.createElement("button")
  const choice3 = document.createElement("button")
  const choice4 = document.createElement("button")

  
  // quiz を画面に表示する関数
  const reloadQuiz = function() {

    choicesContainer.append(choice1, choice2, choice3, choice4)
    // 問題文を表示
    quizText.textContent = "Q. " + quiz.text
  
    // 画像を表示
    quizImage.src = quiz.image
  
    // 選択肢（ボタン）の中身を表示
    choice1.textContent = quiz.choices[0].text
    choice2.textContent = quiz.choices[1].text
    choice3.textContent = quiz.choices[2].text
    choice4.textContent = quiz.choices[3].text
  }
  
  // choiceNumber番目の選択肢を選択
  const choose = function(choiceNumber) {
    // フィードバックを表示
    feedback.textContent = quiz.choices[choiceNumber].feedback
  }
  
  choice1.onclick = function() {
    // 0 番目の選択肢を選択
    choose(0)
  }
  choice2.onclick = function() {
    // 1 番目の選択肢を選択
    choose(1)
  }
  choice3.onclick = function() {
    // 2 番目の選択肢を選択
    choose(2)
  }
  choice4.onclick = function() {
    // ３番目の選択肢を選択
    choose(3)
  }
  
  // reloadQuiz関数 を実行して、クイズを画面に表示する
  reloadQuiz()