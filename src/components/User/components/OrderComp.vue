<template>
<table class="table mt-3 mb-3">
  <thead>
    <tr>
      <th scope="col">Service</th>
      <th scope="col">Price</th>
      <th scope="col">Signup Date</th>
      <th scope="col">Next-Due Date</th>
    </tr>
  </thead>
  <tbody v-for="items in allplans" :key="items.id">
    <tr>
     
      <td>{{items.service}}</td>
      <td><i class='fas fa-euro-sign' style="color:azure"></i> {{items.price}}</td>
      <td>{{items.purchase_date}}</td>
      <td>{{items.next_duedate}}</td>
      
    </tr>
   
  </tbody>
</table>
<br>
 </template>
<script>

import {ref} from "vue";
import { useStore } from 'vuex'
import { onMounted } from 'vue';
import axios from "axios";
export default {
  setup() {
   const store = useStore()
   let username = ref ('');
   let allplans = ref ('');
   username.value = localStorage.getItem('ClientName')

   function fetch_ticket(){
     axios.get(`https://ultradev-api.herokuapp.com/get-order/${username.value}/`).then((response)=>{
       store.state.login.totalservice = response.data.length
       allplans.value = response.data
       
       
     })
   }

  onMounted(() => {

    fetch_ticket();
  })

   return{username,allplans,fetch_ticket}
  },
}
</script>

<style scoped>
select{
    width:100%;
}
.table{
     background-color: rgb(20, 184, 159, 0.2);
    border: 1px solid #14b89f;
    margin-bottom:30px;
}
label{
    color:aliceblue;
}
.card-title{
    color:aliceblue;
}
select{
        background-color: rgb(0,0,0, 0.2);
    border: 1px solid black;
    height:45px;
}
.btn{
   background-color: rgb(0, 0, 0, 0.2);
    border: 1px solid rgb(0, 0, 0);
}
td{
  color:azure;
}
tr{
  color:azure;
}
</style>