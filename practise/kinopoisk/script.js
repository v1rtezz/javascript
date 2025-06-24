class RenderVideos {
  #API_URL =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1"
  #API_KEY = "2bc5f7de-a6c1-4314-844b-1ed661b25d47"

  constructor(film) {
    this.filmsWrapper = film
  }

  createFilm(film) {
    return `
   <div class="film">
        <img
          src="${film.posterUrlPreview}"
          alt=""
          class="film__img"
        />
        <div class="film__rating">${film.ratingKinopoisk}</div>
        <h5 class="film__title">${
          film.nameRu || "Ошибка: название не найдено"
        }</h5>
        <p class="film__genre">${
          film.genres?.[0]?.genre || "Ошибка: жанр не найден"
        }</p>
      </div>
      `
  }

  async renderFilms() {
    this.filmsWrapper.innerHTML = ""
    const array = await this.getFilms()
    array.forEach((film) => {
      this.filmsWrapper.insertAdjacentHTML("beforeend", this.createFilm(film))
    })
  }

  alertError() {
    const errorMessage = `
   <p class="error-message">Опаньки! Что-то не так на стороне сервера. Вернитесь позже</p>
  `
    document.body.insertAdjacentHTML("afterbegin", errorMessage)
throw new Error("Опаньки! Что-то не так на стороне сервера. Вернитесь позже");

  }

  showLoader() {
    const loaderHTML = `
    <img data-video="loader" style="width: 100px; margin: 0 auto; display: block;" src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-5325468-4450387.gif" alt="Loading...">
  `
    document.body.insertAdjacentHTML("afterbegin", loaderHTML)
  }

  hideLoader() {
    document.querySelector('[data-video="loader"]')?.remove()
  }

  async getFilms() {
    this.showLoader()
    try {
      const response = await fetch(`${this.#API_URL}`, {
        headers: {
          "X-API-KEY": `${this.#API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        this.alertError()
      }
      const data = await response.json()
      return data.items
    } catch (error) {
      this.alertError()
    } finally {
      this.hideLoader()
    }
  }
}

const test = new RenderVideos(document.querySelector('[data-film="wrapper"]'))
test.renderFilms()