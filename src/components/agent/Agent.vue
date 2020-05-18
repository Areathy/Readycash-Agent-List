<template>
  <div class="container cont-scroll">
    <div class="row">
         <div class="col-sm-12 center-block">

            <div class="r-table">

               <div class="container header-border">
               <div class="row r-header">
                  <div class="col-sm-5 r-title">Agent List</div>
                  <div class="col-sm-5">
                     <div class="r-search">
                        <button type="submit" class="search-buttom"><img src="./search.svg" alt="search" logo class="r-icon" /></button>
                        <input class="search-cont" type="text" placeholder="Search by agent id, name or phone number" />
                     </div>
                  </div>
               </div>
            </div>

            <div class="container table-cont">

               <div class="row table-title-cont">
                  <div class="col-3 sub-title">
                     <b>Name</b>
                  </div>
                  <div class="col sub-title">
                     <b>Agent Id</b>
                  </div>
                  <div class="col sub-title">
                     <b>Phone Number</b>
                  </div>
                  <div class="col sub-title">
                     <b>Cash Pool Balance</b>
                  </div>
                  <div class="col sub-title">
                     <b>Income Balance</b>
                  </div>
               </div>
               
               <div v-for="agent in agents" :key="agent.id">
                  <agent-item :agent="agent" />     
               </div>
               <div style="border-top: 0.03rem solid #D9D9D9"></div>
            </div>
         </div>
         <!-- <h1 v-if="errors">{{errors}}</h1> -->
      </div>
    </div>
  </div>
</template>

<script src="./Agent.js" />

<style src="../table/Table.css" lang="css" />