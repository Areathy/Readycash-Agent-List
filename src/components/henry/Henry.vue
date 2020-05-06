<template>
  <div class="row content-cont">
    <div class="large-screen col-3 table-content">{{name}}</div>
    <div class="large-screen col table-content">{{id}}</div>
    <div class="large-screen col table-content">{{phone}}</div>
    <div class="large-screen col table-content balance">{{cashPool}}</div>
    <div class="large-screen col table-content balance">{{balance}}</div>


    <!-- <div class="small-screen">
      <h3>Henry</h3>
      <button v-on:click="show = !show">
        Details
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
        <p v-if="show">hello</p>
        <p v-if="show">hello</p>
        <p v-if="show">hello</p>
      </transition>
    </div> -->

  </div>
</template>

<script src="./Henry.js" />


<style src="../table/Table.css" lang="css" />
<style src="./Henry.css" lang="css" />
