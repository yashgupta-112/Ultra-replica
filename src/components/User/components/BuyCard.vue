<template>

            <div class="card" >
               
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <hr>
    <p class="card-text">Storage</p>
    <p class="card-text">{{storage}}</p>
    <p class="card-text">Traffic Upload</p>
    <p class="card-text">{{traffic}}</p>
    <p class="card-text">{{media}}</p>
    <p class="card-text"> <i class='fas fa-euro-sign' style="color:white"></i> {{price}}</p>
    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="OrderService(name,price)" class="btn btn-outline-secondary">Order</button>
  </div>

    
</div>
</template>

<script>
import axios from 'axios';
import { useStore } from 'vuex'
export default {
    props: [
        'name',
        'storage',
        'traffic',
        'media',
        'price'
    ],

    setup() {
         const store = useStore()
         function OrderService(name,price) {
             
            axios.post("http://127.0.0.1:8000/place-order",{
            user : localStorage.getItem('ClientName'),
            service : name,
            price : price
            
            }).then((response) => {
                if (response.status === 200){
                    console.log("success")
                    store.state.login.orderstatus = true
                     setTimeout(function () {
        store.state.login.orderstatus = false;
      }, 3000);
                }
            })
      }

      return{OrderService}
    }

}
</script>
<style scoped>
.card {
    margin-left:8px;
}
.btn{
     background-color: rgb(0, 0, 0, 0.2);
    border: 1px solid rgb(0, 0, 0);
    color:azure;
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