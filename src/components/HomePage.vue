<template>
    <div class="container">
        <picture>
            <img class="single-row-image" src="../assets/weeb.png" alt="weeb-logo" width="300px">
        </picture>
        <h1>Welcome</h1>
        <p>
            The web application was created solely to showcase CRUD operations.
            <br>
            Technologies used include Java for the backend and Vue.js for the frontend, 
            <br> 
            utilizing the Spring Boot framework.
        </p>
        <!-- <div class="button-row">
            <button class="button" @click="AnimeList">View Anime List</button>
        </div> -->
        <hr>
        <div class="button-row">
            <button class="button" @click="CreateAnime">Create Anime</button>
            <button class="button" @click="ReadAnime">View Anime List</button>
            <button class="button" @click="UpdateAnime">Update Anime</button>
            <button class="button" @click="DeleteAnime">Delete Anime</button>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name:'HomePage',

        methods: {
            AnimeList() {
                this.$router.push('/anime-list');
            },
            CreateAnime() {
                this.$router.push('/create-anime');
            },
            ReadAnime() {
                this.$router.push('/read-anime');
            },
            UpdateAnime() {
                this.$router.push('/development-page');
            },
            DeleteAnime() {
                this.$router.push('/development-page');
            },
        }
    }
</script>

<style scoped>
</style>