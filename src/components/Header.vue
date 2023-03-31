<template>
    <header class="header bg-gray-100">
       <div class="nav">
          <img class="logo" src="../assets/Alibaba.jpg">
          <Menu/>
       </div>
    </header>
</template>

<script>
import Menu from './Menu.vue';

export default {
  name: 'Header',
  components: {
    'Menu': Menu, 
  }
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, .08);
  direction: rtl;
}
.nav {
  display: flex;
}
.logo {
  width: auto;
  height: 50px;
}
</style>
