<template>
  <div class="watchlist-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 my-3" v-for="m in movies" :key="m.id">
          <MovieCard :movie="m" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/runtime-core';
import { AppState } from '../AppState.js';
export default {
  setup() {
    return {
      movies: computed(() => AppState.watchlist)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
