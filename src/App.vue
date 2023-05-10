<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Main2 from './components/Main2.vue'
import Footer from './components/Footer.vue'
import Card from './components/Card.vue'

export default {
  name: "App",
  components: {
    Header,
    Main,
    Main2,
    Footer,
    Card
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <Main>
      <Card title="Titolo della Card" content="Contenuto della Card" />
    </Main>
    <Main2 />
    <Footer />
  </div>
</template>


<style lang="scss">
//stili generali per tutta l'applicazione pertanto n n ce scoped nel tag style

@use './scss/main.scss';
</style>
