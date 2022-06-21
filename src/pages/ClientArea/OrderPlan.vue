<template>
 <div v-if="this.$store.state.login.orderstatus" class="alert alert-success mt-2" role="alert">Your order has been Placed</div>
    <h1>Essential Plans</h1>
    <div class="row mt-2">
        <BuyCard class="essential-card" v-for="ess in $store.state.plan.essential" :key="ess.id" :name="ess.name"
            :storage="ess.storage" :traffic="ess.traffic" media="No media application" :price="ess.price"></BuyCard>
    </div>

    <h1>Tank Plans</h1>
    <div class="row mt-2">
        <BuyCard class="tank-card" v-for="ess in $store.state.plan.tank" :key="ess.id" :name="ess.name"
            :storage="ess.storage" :traffic="ess.traffic" media=" media application available" :price="ess.price"></BuyCard>
    </div>

<div v-if="this.$store.state.login.orderstatus" class="alert alert-success mt-2" role="alert">Your order has been Placed</div>
    <h1>NVME Plans</h1>
    <div class="row mt-2">
        <BuyCard class="nvme-card" v-for="ess in  $store.state.plan.nvme" :key="ess.id" :name="ess.name"
            :storage="ess.storage" :traffic="ess.traffic" media="media application available" :price="ess.price"></BuyCard>
    </div>


</template> 

<script>
// import {useRouter} from 'vue-router'
import { onMounted } from 'vue';
import axios from "axios";
import { useStore } from 'vuex'

export default {
    setup() {
        // let data = reactive([]);
        //  create store
        const store = useStore()
        //   const router = useRouter()
        function Getplandata() {
            axios.get("https://ultradev-api.herokuapp.com/plan-api").then((response) => {

                for (let i = 0; i < response.data.length; i++) {
                    store.state.info.listplan.push(response.data[i])
                }

                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].type == "essential") {
                        store.state.plan.essential.push(response.data[i])
                        store.state.plan.essentialprice.push(response.data[i].price)

                    }
                }
                //  for loop end here

                // axios end here
            })
            // function end here
        }
        // tank plan
        function Gettankplandata() {
            axios.get("https://ultradev-api.herokuapp.com/plan-api").then((response) => {

                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].type == "tank") {
                        store.state.plan.tank.push(response.data[i])
                        store.state.plan.tankprice.push(response.data[i].price)
                    }
                }
                //  for loop end here

                // axios end here
            })
            // function end here
        }

        // Tank plan function end here and NVME start header
        function Getnvmeplandata() {
            axios.get("https://ultradev-api.herokuapp.com/plan-api").then((response) => {

                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].type == "NVME") {
                        store.state.plan.nvme.push(response.data[i])
                        store.state.plan.nvmeprice.push(response.data[i].price)
                    }
                }
                //  for loop end here

                // axios end here
            })
            // function end here
        }


        // function start here
        onMounted(() => {
            Getplandata();
            Gettankplandata();
            Getnvmeplandata();
           if (localStorage.getItem('reloaded')) {
        
        localStorage.removeItem('reloaded');
    } else {
        
        localStorage.setItem('reloaded', '1');
        location.reload();
    }



        })

    },
}
</script>

<style scoped>
.essential-card {

    background-color: rgb(20, 184, 159, 0.2);
    border: 1px solid rgb(20, 184, 159);
    width: 13.5rem;
}

h1 {
    margin-top: 15px;
    color: azure;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.tank-card {
    background-color: rgb(219, 39, 119, 0.2);
    border: 1px solid rgb(219, 39, 119);
    width: 13rem;
}

.nvme-card {
    background-color: rgb(234, 89, 45, 0.2);
    border: 1px solid rgb(234, 89, 45);
    width:15rem;
}
</style>
