<template>
    <div class="container">
        <h1>Read Anime</h1>
        <hr>
        <table class="table table-striped">
            <thead>
                <!-- <th class="table-head-text"> ID </th> -->
                <th class="table-head-text"> TITLE </th>
                <!-- <th class="table-head-text"> GENRE </th>
                <th class="table-head-text"> EPISODE COUNT </th>
                <th class="table-head-text"> STATUS </th>
                <th class="table-head-text"> ANIME RATING </th> -->
            </thead>
            <tbody>
                <!-- v-for iterates array of object variables -->
                <tr v-for = "anime in animes" v-bind:key="anime.id">
                    <!-- <td class="table-definition-text"> {{ anime.id }} </td> -->
                    <td class="table-definition-text"> 
                        {{ anime.title }} 
                        <button class="button" @click="readAnimeDetails(anime.id)">Read Details</button>
                    </td>
                    <!-- <td class="table-definition-text"> {{ anime.genre }} </td>
                    <td class="table-definition-text"> {{ anime.episodeCount }} </td>
                    <td class="table-definition-text"> {{ anime.status }} </td>
                    <td class="table-definition-text"> {{ anime.rating }} </td> -->
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
import AnimeService from '../services/AnimeService'

    export default {
        name: 'ReadAnime',

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
            },
            readAnimeDetails(anime) {
                AnimeService.getAnimeById(anime.id).then(response => {
                    console.log('Anime Details:', response.data);
                })
                .catch(error => {
                    console.error('Error fetching anime details:', error);
                });
            },
            HomePage() {
                this.$router.push('/');
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
        background: rgb(233, 233, 233);
    }
    .button:hover {
        background: black;
    }
</style>