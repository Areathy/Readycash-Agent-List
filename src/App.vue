<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 minimize-column">
          <Header />
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";



export default {
  name: "App",
  components: {
    Header
  },

  mounted() {
    this.redirectUser()
  },

  methods: {
    redirectUser() {
      const auth = localStorage.getItem('authorization')
      if (auth) {

        this.$router.push({ name: 'agent'})
        
      } else {
        this.$router.push('/');
      }
    }

  }  

};
</script>

<style>
.minimize-column {
  width: 94%;
  padding: 0px !important;
}
</style>
<style src="./components/table/Table.css" lang="css" />