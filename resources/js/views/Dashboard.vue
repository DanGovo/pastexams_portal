<template>
  <div>
      <Header />
    <div id="layoutSidenav">
      <Sidenav />
      <div id="layoutSidenav_content">
        <router-view></router-view>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
export default {
    components: {
    Sidenav,
    Header,
    Footer,
  },

  created() {
    document.querySelector("body").style.backgroundColor = "#fff";
  },
}
</script>

<style>

</style>
