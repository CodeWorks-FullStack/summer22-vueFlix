import { AppState } from "../AppState.js"
import { Movie } from "../models/Movie.js"
import { moviesApi } from "./AxiosService.js"

class MoviesService {

  async getMovies(page = 1) {
    // TODO handle pagination maybe???
    const res = await moviesApi.get('/discover/movie', {
      params:{
        page: page
      }
    })
    AppState.movies = res.data.results.map(m => new Movie(m))
    AppState.page = res.data.page
  }


  async getMoviesBySearch(searchTerm) {
    const res = await moviesApi.get('/search/movie', {
      params: {
        query: searchTerm
      }
    })
    AppState.movies = res.data.results.map(m => new Movie(m))
  }


  addMovieToWatchlist(movie) {

    let found = AppState.watchlist.find(m => m.id == movie.id)
    if (found) {
      throw new Error('NOPE, you already have that movie in your list')
    }

    AppState.watchlist.push(movie)

    window.localStorage.setItem('watchlist', JSON.stringify(AppState.watchlist))
  }



}


export const moviesService = new MoviesService()
