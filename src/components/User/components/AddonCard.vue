<template>
<div v-if="this.$store.state.login.orderstatus" class="alert alert-success mt-2" role="alert">Your order has been Placed</div>
   <div class="container mt-4">
 <div class="card border mb-3" style="max-width: 25rem;">
  <div class="card-header">{{traffic}}TB extra upload bandwidth per month</div>
  <div class="card-body ">
    <h5 class="card-title">Buying this addon will buy you 3TB of extra upload bandwidth each month until cancelled.</h5>
    <p class="card-text">Please note: unused upload bandwidth cannot be rolled over to next month.</p>
    <div class="order">
    <h5>€{{price}} EUR Monthly</h5>
    <button type="button" @click="OrderTraffic(traffic,price)" class="btn btn-outline-secondary">Order</button>
  </div>
  </div>
</div>

   </div>
</template>
<script>
import axios from 'axios';
export default {
    props: [
        'traffic',
        'price',
    ],
    setup(){
      function OrderTraffic(traffic,price) {
        axios.post("http://127.0.0.1:8000/place-order",{
            user : localStorage.getItem('ClientName'),
            service : "Addon-"+traffic+"TB",
            price : price
        }).then((response)=>{
          if(response.status === 200){
            console.log("success")
          }
        })
      }

      return{OrderTraffic}
    }
    
}
</script>

<style scoped>
.order{
  margin-left:195px;
}
.btn{
  margin-left:110px;
   background-color: rgb(0, 0, 0, 0.2);
    border: 1px solid rgb(0, 0, 0);
    color:azure;
}
.card{
   background-color: rgb(54, 162, 235, 0.2);
    border: 1px solid rgb(54, 162, 235);
}
.card-header{
  color:azure;
}
.card-title{
    color:azure;
}
.card-text{
    color:azure;
}
h5{
    color:azure;
}
</style>