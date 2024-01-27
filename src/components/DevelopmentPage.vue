<template>
    <div class="container">
        <h1>Oops, Sorry</h1>
        <p>Page is still under development, please try again later.</p>
        <hr>
        <div class="button-row">
            <button class="button" @click="GoBack">Back</button>
        </div>
    </div>
</template>

<script>
    export default {
        name : "DevelopmentPage",

        methods: {
            GoBack() {
                this.$router.push('/view-anime');
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>