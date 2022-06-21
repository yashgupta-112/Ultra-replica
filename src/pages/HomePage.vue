<template>
  <ImageCard></ImageCard>
  <PricingComponent></PricingComponent>
  <br><br><br>
  <SupportCom></SupportCom>
  <SupportInfo class="info"></SupportInfo>

  <ContactPage></ContactPage>

</template>

<script>
import { onMounted } from 'vue';
import axios from "axios";
import { useStore } from 'vuex'

export default {
  setup() {
    // let data = reactive([]);
    //  create store
    const store = useStore()
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

      if (localStorage.getItem('Admin') != null) {
        store.state.login.AdminLogin = true
      }

    })

  },
}
</script>
<style scoped>
hr {
  color: white;
  border: 1px solid
}

.info {
  background-color: #151a1f;

  height: 240px;
  margin-bottom: 45px;
}
</style>