<template>
  <div class="list d-flex">
     <div class="thumb" v-for="post in posts" :key="post.title">
          <img class="img" :src="post.thumb">
          <h2 class="title">{{ post.title }}</h2>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Posts',
  data() {
    return {
      posts:[]
    }
  },
  mounted(){
     axios.get('http://localhost:3000/contents')
       .then(res => this.posts =res.data )
       .catch(err => console.log(err))
  }
};
</script>

<style scoped>
.list {
  justify-content: center;
  margin-bottom: 30px;
  gap: 20px;
}
.thumb {
    border: 1px solid #e2e2e2;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
}
.thumb img {
  width:350px;
  padding: 10px;
  border-radius: 10px;
}
.thumb .title {
  font-size: 14px;
  padding: 5px 10px;
}
</style>
