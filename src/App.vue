<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 minimize-column">
          <Header />
        </div>
      </div>
    </div>

    <router-view v-if="appIsReady" />
    <div v-else style="color:green; margin:15rem; font-size:16px">Please wait...</div>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";

export default {
  name: "App",
  components: {
    Header
  },

  computed: {
    appIsReady() {
      return this.$root.isAppReady;
    }
  },
};
</script>

<style>
.minimize-column {
  width: 94%;
  padding: 0px !important;
}
</style>
<style src="./components/table/Table.css" lang="css" />