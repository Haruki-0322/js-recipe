const figure = document.getElementById("figure")

// figure.onclick = function() {
//     figure.classList.toggle("rounded")
// }
// toggleはそのクラス名が要素に有れば削除し、無ければ追加する。


// ↓発展１-いろんなイベント
// figure.onmouseenter = () => {
//     figure.classList.toggle("rounded")
// }


// ↓発展２-△も！
figure.onclick = function() {
    if (figure.classList.contains("square")) {
        figure.classList.replace("square", "rounded")
    } else if (figure.classList.contains("rounded")) {
        figure.classList.replace("rounded", "triangle")
    } else {
        figure.classList.replace("triangle", "square")
    }
}