const videosWrapper = document.querySelector('[data-video="wrapper"]')

const renderVideos = function (array) {  
  array.forEach(element => {
     videosWrapper.insertAdjacentHTML('beforeend', `
   <div class="video">
        <img
          src="${element.posterUrlPreview}"
          alt="ivanzolo"
          class="video__img"
        />
        <div class="video__rating">${element.ratingKinopoisk}</div>
        <h5 class="video__title">${element.nameRu}</h5>
        <p class="video__genre">${element.genres[0].genre}</p>
      </div>
      `)
  });
  
 
}

fetch(
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1",
  {
    headers: {
      "X-API-KEY": "898a4dcc-f092-4bad-bf3e-9f9d3d36de62",
      "Content-Type": "application/json",
    },
  }
)
  .then((filmData) => {
    return filmData.json()
  })
  .then((info) => {
    console.log(info)
    renderVideos(info.items)
  })

