<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <h2>{{ animeDetails.title }}</h2>
        <p>Genre: {{ animeDetails.genre }}</p>
        <p>Episode count: {{ animeDetails.episodeCount }}</p>
        <p>Status: {{ animeDetails.status }}</p>
        <p>Rating: {{ animeDetails.rating }}</p>
  
        <button class="button" @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      animeDetails: Object,
      showModal: Boolean,
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
  }
  
  .button {
    background: none;
  }
  
  .button:hover {
    background: black;
  }
  </style>