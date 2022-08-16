import { reactive } from 'vue'
import { Movie } from './models/Movie.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},

  /**@type {import('./models/Movie.js').Movie[]} */
  watchlist: loadState(),


  /**@type {import('./models/Movie.js').Movie[]} */
  movies: [],

  /**@type {import('./models/Movie.js').Movie} */
  activeMovie: null,

  page: 0
})


function loadState() {
  let movies = JSON.parse(window.localStorage.getItem('watchlist')) || []
  return movies.map(m => new Movie(m))
}
