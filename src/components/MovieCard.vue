<template>
  <div class="movie-card card">
    <img
      class="img-fluid rounded-top"
      :src="movie.background"
      alt=""
      data-bs-toggle="modal"
      data-bs-target="#active-movie"
      @click="setActiveMovie(movie)"
    />
    <div class="card-body">
      <h4 class="card-title">{{ movie.title }}</h4>
      <p>
        <b>{{ movie.vote }}</b>
      </p>
    </div>

    <!-- <Modal :id="'m-' + movie.id">
      :data-bs-target="'#m-' + movie.id"
      <div>
        <h1>{{movie.title}}</h1>
      </div>
    </Modal> -->
  </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { Movie } from '../models/Movie.js';
export default {
  props: {
    movie: { type: Movie, required: true }
  },
  setup(props) {

    return {

      setActiveMovie() {
        AppState.activeMovie = props.movie
      }

    }
  }
}
</script>


<style lang="scss" scoped>
img {
  max-height: 250px;
  object-fit: cover;
  object-position: top;
}
</style>
