<template>
    <h1 class="mt-3">Hello {{this.$store.state.login.ClientName.toUpperCase()}},Welcome Back To Ultra.</h1>
    <div class="d-flex bd-highlight">

<!-- cards below -->
<div class="row mt-4">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{{this.$store.state.login.totalservice }} <i class='fab fa-codepen'></i></h2>
        <h5>Services</h5>
        <hr>
        </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">0 <i class='far fa-file-alt'></i></h2>
        <h5>Quotes</h5>
        <hr>
      </div>
    </div>
  </div>
    <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{{this.$store.state.login.totalticket}}<i class='far fa-address-card'></i></h2>
        <h5>Tickets</h5>
        <hr>
      </div>
    </div>
  </div>
    <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">1<i class='fas fa-money-check'></i></h2>
        <h5>Invoice</h5>
        <hr>
      </div>
    </div>
  </div>
</div>
</div>
<!-- detail form here -->
 <InfoForm></InfoForm>
   <!-- order service here -->
   <OrderComp></OrderComp>
   
</template>

<script>
import {ref} from "vue";
import { useStore } from 'vuex'
import { onMounted } from 'vue';
import axios from "axios";
export default {
    setup() {
    const store = useStore()
    store.state.login.ClientName = localStorage.getItem('ClientName')
     
   let username = ref ('');
  
   username.value = localStorage.getItem('ClientName')

   function fetch_ticket(){
     axios.get(`http://127.0.0.1:8000/fetch-ticket/${username.value}/`).then((response)=>{
       store.state.login.totalticket = response.data.length
     
       
     })
   }

  onMounted(() => {

    fetch_ticket();
  })

   return{username,fetch_ticket}
    },
}
</script>

<style scoped>
h1{
    color:white;
    text-decoration: underline;
}
.card{
    width: 250px;
     background-color: rgb(20, 184, 159, 0.2);
    border: 1px solid #14b89f;
}
i{
  position:relative;
  left:130px;
  font-size:55px;
  color:aliceblue;
}
.card-title {
  color:azure;
}
h5{
  color:azure;
}
hr{
  color:#db2777;
  height:3px;
}
</style>