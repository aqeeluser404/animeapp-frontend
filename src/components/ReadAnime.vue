<template>
    <div class="container">
      <h1>Read Anime</h1>
      <hr>
      <table class="table table-striped">
        <thead>
          <th class="table-head-text"> TITLE </th>
        </thead>
        <tbody>
          <tr v-for="anime in animes" :key="anime.id">
            <td class="table-definition-text">
              {{ anime.title }}
              <button class="button" @click="openModal(anime)">Read Details</button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr>
      <div class="button-row">
        <button class="button button-background" @click="HomePage">Go Home</button>
      </div>
  
      <!-- <AnimeDetailsModal
        :animeDetails="selectedAnimeDetails"
        :showModal="isModalOpen"
        @close-modal="closeModal"
      /> -->
    </div>
  </template>
  
  <script>
  import AnimeService from '../services/AnimeService';
//   import AnimeDetailsModal from '../components/modals/AnimeDetailsModal';
  
  export default {
    name: 'ReadAnime',
    data() {
      return {
        animes: [],
        // isModalOpen: false,
        // selectedAnimeDetails: {},
      };
    },
    methods: {
      getAnimeList() {
        AnimeService.getAnimeList().then((response) => {
          this.animes = response.data;
        });
      },
    //   openModal(anime) {
    //     AnimeService.getAnimeById(anime.id).then((response) => {
    //       this.selectedAnimeDetails = response.data;
    //       this.isModalOpen = true;
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching anime details:', error);
    //     });
    //   },
    //   closeModal() {
    //     this.isModalOpen = false;
    //     this.selectedAnimeDetails = {};
    //   },
      HomePage() {
        this.$router.push('/');
      },
    },
    // components: {
    //   AnimeDetailsModal,
    // },
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
    .container {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .button {
        background: none;
    }
    .button-background {
        background: rgb(59, 59, 59);
    }
    .button:hover {
        background: black;
    }
</style>