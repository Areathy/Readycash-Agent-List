<template>
<div class="row content-cont">
   <div class="col-3 table-content">{{agent.fullName}}</div>
   <div class="col table-content">{{agent.realId}}</div>
   <div class="col table-content">{{agent.phoneNumber}}</div>
   <div class="col table-content balance" v-if="balance.main < 20000" style="color: red">{{loading ? '...' : balance.main.replace(/\B(?=(\d{3})+\b)/g, ",")}}</div>
   <div class="col table-content balance" v-else>{{loading ? '...' : balance.main.replace(/\B(?=(\d{3})+\b)/g, ",")}}</div>
   <div class="col table-content balance">{{loading ? '...' : balance.income.replace(/\B(?=(\d{3})+\b)/g, ",")}}</div>      
</div>
</template>

<script src="./script.js" />
