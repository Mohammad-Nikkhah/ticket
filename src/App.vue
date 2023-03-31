<template>
  <Header/>
  <Faq/>
  <Footer/>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Faq from './components/Faq.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Faq
  }
}
</script>

<style>
#app {
  font-family: Mada;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;

}
</style>
