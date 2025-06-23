class RenderVideos {
  #API_URL =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1"
  #API_KEY = "2bc5f7de-a6c1-4314-844b-1ed661b25d47"

  constructor(video) {
    this.videosWrapper = video
  }

  createVideo(video) {
    return `
   <div class="video">
        <img
          src="${video.posterUrlPreview}"
          alt=""
          class="video__img"
        />
        <div class="video__rating">${video.ratingKinopoisk}</div>
        <h5 class="video__title">${
          video.nameRu || "Ошибка: название не найдено"
        }</h5>
        <p class="video__genre">${
          video.genres?.[0]?.genre || "Ошибка: жанр не найден"
        }</p>
      </div>
      `
  }

  renderVideos(array) {
    this.videosWrapper.innerHTML = ""
    array.forEach((video) => {
      this.videosWrapper.insertAdjacentHTML('beforeend', this.createVideo(video)) 
    })
  }

  async loadData() {
    try {
      const response = await fetch(`${this.#API_URL}`, {
        headers: {
          "X-API-KEY": `${this.#API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        console.error(
          "Опаньки! Что-то не так на стороне сервера. Вернитесь позже"
        )
      }

      const data = await response.json()
      this.renderVideos(data.items)
    } catch (error) {
      throw new Error("Ошибка загрузки!")
    }
  }
}

const test = new RenderVideos(document.querySelector('[data-video="wrapper"]'))
test.loadData()