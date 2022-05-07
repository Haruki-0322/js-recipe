const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")


let quizNumber = 0
const quizzes = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        isCorrect: false,
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        isCorrect: false,
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        isCorrect: true,
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
    ],
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    choices: [
      {
        text: "１",
        isCorrect: false,
        feedback: "残念！ひとつ少ないよ。",
      },
      {
        text: "２",
        isCorrect: true,
        feedback: "正解！１でも３でもないよ！",
      },
      {
        text: "３",
        isCorrect: false,
        feedback: "残念！ひとつ多いよ。",
      },
    ],
  },
  {
    text: "この城の名前は？",
    image: "Maruoka.png",
    choices: [
      {
        text: "丸岡城",
        isCorrect: true,
        feedback: "正解！どこからどうみても丸岡城だね。",
      },
      {
        text: "丸亀城",
        isCorrect: true,
        feedback: "残念！どこからどうみても丸亀城ではないよ。",
      },
      {
        text: "丸子城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸子城ではないよ。",
      },
    ],
  },
]

const reloadQuiz = function (quizNumber) {
    const quiz = quizzes[quizNumber]
    
}