<template>
  <div class="container cont-scroll">
    <div class="row">
         <div v-if="balance" class="col-sm-12 center-block">

            <div class="r-table">

               <div class="container header-border">
               <div class="row r-header">
                  <div class="col-sm-5 r-title">Agent List</div>
                  <div class="col-sm-5">
                     <div class="r-search">
                     <!-- <img src="./search.svg" alt="search" logo class="r-icon" /> -->
                     <!-- <div class="r-search-text">Search by agent id, name, phone number</div> -->
                     <input class="search-cont r-search-text" type="text" placeholder="Search by agent id, name, phone number" />
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
               
               <div class="row content-cont" v-for="agent in agents" :key="agent.id">
                  <div class="col-3 table-content">{{agent.fullName}}</div>
                  <div class="col table-content">{{agent.realId}}</div>
                  <div class="col table-content">{{agent.phoneNumber}}</div>
                  <div class="col table-content balance">{{balance.main}}</div>
                  <div class="col table-content balance">{{balance.income}}</div>      
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