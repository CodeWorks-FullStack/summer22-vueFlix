<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>

  <Modal id="active-movie">
    <div class="">
      <div class="" v-if="activeMovie">
        <h3>{{ activeMovie.title }}</h3>
        <img :src="activeMovie.poster" alt="" class="img-fluid" />
        <p>{{ activeMovie.overview }}</p>
      </div>
      <div>
        <button class="btn btn-block w-100 btn-primary" @click="addToWatchlist">
          Add to watchlist
        </button>
      </div>
    </div>
  </Modal>
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';
import { moviesService } from './services/MoviesService.js';
import Pop from './utils/Pop.js';

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      activeMovie: computed(() => AppState.activeMovie),
      addToWatchlist() {
        try {
          moviesService.addMovieToWatchlist(AppState.activeMovie)
          Pop.success(`Added ${AppState.activeMovie.title} to your watchlist`)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
