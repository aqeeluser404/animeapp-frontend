<template>
    <div class="container">
        <h1 class="text-center">Anime List</h1>
        <table class="table table-striped">
            <thead>
                <th> Anime Id </th>
                <th> Anime Title</th>
                <th> Anime Genre </th>
                <th> Anime Episode Count </th>
                <th> Anime Status </th>
                <th> Anime Rating </th>
            </thead>
            <tbody>
                <!-- v-for iterates array of object variables -->
                <tr v-for = "anime in animes" v-bind:key="anime.id">
                    <td> {{ anime.id }} </td>
                    <td> {{ anime.title }} </td>
                    <td> {{ anime.genre }} </td>
                    <td> {{ anime.episodeCount }} </td>
                    <td> {{ anime.status }} </td>
                    <td> {{ anime.rating }} </td>
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

<style scoped></style>