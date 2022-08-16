export class Movie {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.overview = data.overview
    this.releaseDate = data.releaseDate || data.release_date
    this.poster = data.poster || 'https://image.tmdb.org/t/p/w500' + data.poster_path
    this.background = data.background || 'https://image.tmdb.org/t/p/w500' + data.backdrop_path
    this.vote = data.vote || data.vote_average
  }
}
