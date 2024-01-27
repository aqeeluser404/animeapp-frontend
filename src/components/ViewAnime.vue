<template>
    <div class="container">
      <h1>Read Anime</h1>
      <p>Choose and click on an anime name to view its details.</p>
      <hr>
      <table class="table">
        <thead>
          <th class="table-head-text"> TITLE </th>
        </thead>
        <tbody>
          <tr v-for="anime in animes" :key="anime.id">
            <td class="table-definition-text">
              <button class="anime-details-button" @click="showDetails(anime.id)">{{ anime.title }}</button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr>
      <div class="button-row">
        <button class="button button-background" @click="HomePage">Go Home</button>
      </div>
    </div>
  </template>
  
  <script>
  import AnimeService from '../services/AnimeService';
  
  export default {
    name: 'ViewAnime',
    data() {
      return {
        animes: [],
      };
    },
    methods: {
      getAnimeList() {
        AnimeService.getAnimeList().then((response) => {
          this.animes = response.data;
        });
      },
      showDetails(animeId) {
        this.$router.push(`/anime/${animeId}`);
      },
      HomePage() {
        this.$router.push('/');
      },
    },
    created() {
      this.getAnimeList();
    },
  };
  </script>

<style scoped>
    .table-head-text {
      font-size: 0.9rem;
      text-align: left;
      padding: 0.5rem;
    }
    .table-definition-text {
      font-size: 0.8rem;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .table-definition-text:hover {
      background: rgb(241, 241, 241);
    }
    .anime-details-button {
      border: none;
      background: none;
    }
    p {
      margin-bottom: 0;
    }
    .container {
        width: 25%;
        display: flex;
        flex-direction: column;
    }
</style>