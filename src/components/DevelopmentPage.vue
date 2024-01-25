<template>
    <div class="container">
        <h1>Oops, Sorry</h1>
        <p>Page is still under development, please try again later.</p>
        <hr>
        <div class="button-row">
            <button class="button" @click="HomePage">Go Home</button>
        </div>
    </div>
</template>

<script>
    export default {
        name : "DevelopmentPage",

        methods: {
            HomePage() {
                this.$router.push('/');
            }
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