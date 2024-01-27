<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
  #app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: rgb(248,248,248);
    color: #2c3e50;
    padding-top: 100px;
    margin: 2rem;
    border-radius: 15px;
  }
  /* button styling */
  .button-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
    text-align: center;
  }
  .button {
    border-radius: 20px;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    color: white;
    background: rgb(59, 59, 59);
  }
  .button:hover {
    background: black;
    color: white;
  }
  /* container styling */
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
