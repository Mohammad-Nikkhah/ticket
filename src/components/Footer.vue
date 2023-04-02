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
  width: 100%;
  padding: 25px 0;
}
</style>
