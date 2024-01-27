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
        <hr>
        <div class="button-row">
            <button class="button" @click="ViewAnime">View Anime List</button>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name:'HomePage',

        methods: {
            ViewAnime() {
                this.$router.push('/view-anime');
            },
        }
    }
</script>

<style scoped>
</style>