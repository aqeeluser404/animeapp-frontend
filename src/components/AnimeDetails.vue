<template>
    <div class="container">
      <h1>Anime Details</h1>
      <p>This data is pulled from the database.</p>
      <hr>
      <table class="table">
        <tbody>
            <tr>
                <th class="table-definition-text">Full Name:</th>
                <td class="table-definition-text">{{ anime.title }}</td>
            </tr>
            <tr>
                <th class="table-definition-text">Episode Count:</th>
                <td class="table-definition-text">{{ anime.episodeCount }}</td>
            </tr>
            <tr>
                <th class="table-definition-text">Genre:</th>
                <td class="table-definition-text">{{ anime.genre }}</td>
            </tr>
            <tr>
                <th class="table-definition-text">Status:</th>
                <td class="table-definition-text">{{ anime.status }}</td>
            </tr>
            <tr>
                <th class="table-definition-text">Rating:</th>
                <td class="table-definition-text">{{ anime.rating }}</td>
            </tr>
        </tbody>
      </table>
      <hr>
      <div class="button-row">
        <button class="button button-background" @click="HomePage">View All Anime</button>
      </div>
    </div>
  </template>
  
<script>
    import AnimeService from '../services/AnimeService';
  
    export default {
        name: 'AnimeDetails',
        data() {
            return {
                anime: {},
            };
        },
        methods: {
            HomePage() {
                this.$router.push('/view-anime');
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
        /* display: flex;
        justify-content: space-between; */
        align-items: center;
    }
    .container {
        width: 25%;
        display: flex;
        flex-direction: column;
    }
</style>
  