<template>
<div class="row content-cont">
   <div class="col-3 table-content">{{agent.fullName}}</div>
   <div class="col table-content">{{agent.realId}}</div>
   <div class="col table-content">{{agent.phoneNumber}}</div>
   <div class="col table-content balance">{{loading ? '...' : balance.main}}</div>
   <div class="col table-content balance">{{loading ? '...' : balance.income}}</div>      
</div>
</template>

<script src="./script.js" />
