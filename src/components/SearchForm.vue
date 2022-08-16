<template>
  <div class="search-form">
    <form @submit.prevent="searchMovies">
      <div class="input-group">
        <input class="form-control" type="text" required v-model="query" />
        <button class="btn btn-outline-success" type="submit">
          <i class="mdi mdi-magnify"></i>
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { moviesService } from '../services/MoviesService.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
export default {
  setup() {
    const query = ref('') // hard set rules forms use refs

    return {
      query,
      async searchMovies() {
        try {
          await moviesService.getMoviesBySearch(query.value)
          query.value = '' // resents the form
        } catch (error) {
          logger.error('[Searching Movies]', error)
          Pop.error(error)
        }
      }

    }
  }
}
</script>


<style lang="scss" scoped>
</style>
