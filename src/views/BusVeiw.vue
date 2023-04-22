<template>
  <div>
    <label for="searchInput">Search:</label>
    <input type="text" id="searchInput" v-model="searchQuery">
    <button @click="searchUser">Search</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    searchUser() {
      axios.get(`/airline?search=${this.searchQuery}`)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      this.searchQuery = '';
    }
  }
}
</script>
