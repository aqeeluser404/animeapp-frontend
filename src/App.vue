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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 100px;
  }
  /* button styling */
  .button-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
    text-align: center;
  }
  .button {
    border-radius: 15px;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }
  .button:hover {
    background-color: black;
    color: white;
  }
  /* container styling */
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
