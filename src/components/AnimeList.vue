<template>
    <div class="container">
        <h1 class="text-center">Anime List</h1>
        <hr>
        <table class="table table-striped">
            <thead>
                <th class="table-head-text"> ID </th>
                <th class="table-head-text"> TITLE </th>
                <th class="table-head-text"> GENRE </th>
                <th class="table-head-text"> EPISODE COUNT </th>
                <th class="table-head-text"> STATUS </th>
                <th class="table-head-text"> ANIME RATING </th>
            </thead>
            <tbody>
                <!-- v-for iterates array of object variables -->
                <tr v-for = "anime in animes" v-bind:key="anime.id">
                    <td class="table-definition-text"> {{ anime.id }} </td>
                    <td class="table-definition-text"> {{ anime.title }} </td>
                    <td class="table-definition-text"> {{ anime.genre }} </td>
                    <td class="table-definition-text"> {{ anime.episodeCount }} </td>
                    <td class="table-definition-text"> {{ anime.status }} </td>
                    <td class="table-definition-text"> {{ anime.rating }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import AnimeService from '../services/AnimeService'

    export default {
        name: 'AnimeList',
        data() {
            return {
                animes : []
            }
        },
        methods: {
            getAnimeList() {
                AnimeService.getAnimeList().then((response) => {
                    this.animes = response.data;
                });
            }
        },
        created() {
            this.getAnimeList()
        }
    }
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
}
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

</style>