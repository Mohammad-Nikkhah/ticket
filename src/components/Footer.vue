<template>
  <footer class="footer">
    <Servicebox/>
  </footer>
</template>

<script>
import Servicebox from './Servicebox.vue';
export default {
  name: 'Footer',
  components: {
    'Servicebox': Servicebox, 
  }
}
</script>

<style scoped>
.footer {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
}
</style>
