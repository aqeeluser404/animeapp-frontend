<template>
  <div class="container">
      <h1>Anime Details</h1>
      <p>Update and save changes below</p>
      <hr>
      <form @submit.prevent="saveChanges">
        <table class="table">
          <tbody>
            <tr>
              <th class="table-definition-text">Full Name:</th>
              <td class="table-definition-text">
                <input v-model="anime.title" type="text" />
              </td>
            </tr>
            <tr>
              <th class="table-definition-text">Episode Count:</th>
              <td class="table-definition-text">
                <input v-model="anime.episodeCount" type="number" />
              </td>
            </tr>
            <tr>
              <th class="table-definition-text">Genre:</th>
              <td class="table-definition-text">
                <input v-model="anime.genre" type="text" />
              </td>
            </tr>
            <tr>
              <th class="table-definition-text">Status:</th>
              <td class="table-definition-text">
                <input v-model="anime.status" type="text" />
              </td>
            </tr>
            <tr>
              <th class="table-definition-text">Rating:</th>
              <td class="table-definition-text">
                <input v-model="anime.rating" type="number" />
              </td>
            </tr>
          </tbody>
        </table>
        <hr>
        <div class="button-row">
          <button class="button button-inside-row" type="submit">Save Changes</button>
          <button class="button button-background" @click="goBack">Back</button>
        </div>
      </form>
  </div>
</template>
  
<script>
  import AnimeService from '../services/AnimeService';
  
  export default {
    name: 'UpdateAnime',
    data() {
      return {
        anime: {},
      };
    },
    methods: {
      saveChanges() {
        const animeId = this.$route.params.id;
        AnimeService.updateAnime(animeId, this.anime)
          .then(() => {
            console.log('Anime details updated successfully');
            this.$router.push('/view-anime');
          })
          .catch(error => {
            console.error('Error updating anime details:', error);
          });
      },
      goBack() {
        const animeId = this.$route.params.id; 
        this.$router.push({ name: 'AnimeDetails', params: { animeId } });
      },
    },
    created() {
      const animeId = this.$route.params.id;
      AnimeService.getAnimeById(animeId)
        .then(anime => {
          this.anime = anime;
        })
        .catch(error => {
          console.error('Error fetching anime details:', error);
        });
    },
  };
</script>
  
<style scoped>
  .table-definition-text {
    text-align: left;
    font-size: 0.8rem;
    align-items: center;
  }
  .container {
    width: 25%;
    display: flex;
    flex-direction: column;
  }
</style>
  