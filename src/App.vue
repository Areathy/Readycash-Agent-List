<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 minimize-column">
          <Header />
        </div>
      </div>
    </div>

    <div class="container cont-scroll" style="padding-right: 10px;">
      <div class="row">
        <div class="col-sm-12 center-block">
          <Table />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Table from "./components/table/Table.vue";

export default {
  name: "App",
  components: {
    Header,
    Table
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