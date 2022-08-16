<template>
  <div class="home-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 my-3" v-for="m in movies" :key="m.id">
          <MovieCard :movie="m" />
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-around my-3">
      <button class="btn btn-info" @click="getMovies(prevPage)" v-if="prevPage > 0">
        Previous
      </button>
      <button class="btn btn-info" @click="getMovies(nextPage)">Next</button>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core';
import { AppState } from '../AppState.js';
import { moviesService } from '../services/MoviesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';


export default {
  setup() {
    // private

    async function getMovies(page) {
      try {
        await moviesService.getMovies(page)
      } catch (error) {
        logger.error('[Getting Movies]', error)
        Pop.error(error)
      }
    }


    // Lifecycle Hooks
    onMounted(() => {
      getMovies()
    })

    // If the user needs it return it aka public
    return {
      movies: computed(() => AppState.movies),
      nextPage: computed(() => AppState.page + 1),
      prevPage: computed(() => AppState.page - 1),
      getMovies
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
