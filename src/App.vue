<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Card from './components/Card.vue'

export default {
  name: "App",
  components: {
    Header,
    Main,
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
    <Footer />
  </div>
</template>

<style lang="scss">
//stili generali per tutta l'applicazione pertanto n n ce scoped nel tag style

@use './scss/main.scss';
</style>
