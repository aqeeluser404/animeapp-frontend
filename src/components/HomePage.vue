<template>
    <div class="container">
        <h1>Welcome</h1>
        <p>
            The web application was created solely to showcase CRUD operations.
            <br>
            Technologies used include Java for the backend and Vue.js for the frontend, 
            <br> 
            utilizing the Spring Boot framework.
        </p>
        <div class="button-row">
            <button class="button" @click="AnimeList">View Anime List</button>
        </div>
        <hr>
        <div class="button-row">
            <button class="button" @click="AddAnime">Create Anime</button>
            <button class="button" @click="ReadAnime">Read Anime</button>
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
            AddAnime() {
                this.$router.push('/development-page');
            },
            ReadAnime() {
                this.$router.push('/development-page');
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
    .button-row {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    .button {
        border-radius: 15px;
        padding: 0.5rem;
        border: none;
    }
    .button:hover {
        background-color: black;
        color: white;
    }
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>