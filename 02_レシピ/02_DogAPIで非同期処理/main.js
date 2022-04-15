const imageElement = document.getElementById("fox-image")

// 指定したサーバーにデータを取りに行く
fetch("https://randomfox.ca/floof/")
  .then((response) => {
    return response.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.image
  })

  
