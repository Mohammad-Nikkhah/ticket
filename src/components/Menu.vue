<template>
  <nav class="menu-header d-flex justify-content-start">
    <li v-for="route in routes" :key="route.path">
       <router-link :to="route.path">{{ route.name }}</router-link>
    </li>
  </nav>

</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      routes: [
        { path: "/", name: "بلیط" },
        { path: "/hotel", name: "اقامت" },
        { path: "/tour", name: "تور" },
      ],
    };
  }
};
</script>

<style scoped>

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  gap: 20px;
}

.menu-header li {
  list-style: none;
  cursor: pointer;
}
</style>
