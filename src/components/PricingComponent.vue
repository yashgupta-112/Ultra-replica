<template>
  <div class="container mt-2">
    <PlanHeading class="heading">HHD Plans</PlanHeading>
    <SubHeading class="sub-heading">Reliable, all-purpose plans that offer great value and exceptional
      features.</SubHeading>
    <!-- Badge -->
    <div class="row">
      <div class="col">
        <PlanBadge id="badge" class="m-xl-1">UNMETERED DOWNLOAD</PlanBadge>
        <PlanBadge id="badge" class="m-xl-1">50GBPS NETWORK</PlanBadge>
        <PlanBadge id="badge" class="m-xl-1">50GBPS SHARED DOWNLOAD</PlanBadge>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="btn-group mt-3 ">
          <button @click="eurfunc" type="button" class="btn btn-outline-primary">€ EUR</button>
          <button @click="usdfunc" type="button" class="btn btn-outline-primary">$ USD</button>
          <button @click="gbpfunc" type="button" class="btn btn-outline-primary">£ GBP</button>
        </div>
        <div id="btn-group" class="btn-group mt-3" role="group" aria-label="Basic example">
          <button @click="monthlypriceupdate" id="billing" type="button" class="btn btn-primary">Monthly</button>
          <button @click="quaterlypriceupdate" id="billing" type="button" class="btn btn-primary">Quaterly</button>
          <button @click="semiannualpriceupdate" id="billing" type="button" class="btn btn-primary">Semi-Annual</button>
          <button @click="yearpriceupdate" id="billing" type="button" class="btn btn-primary">Annual</button>
        </div>
      </div>
    </div>
    <br>
    <PlanHeading class="heading"><i class="fa fa-rocket"
        style=" margin-right:15px; margin-left:10px font-size:35px;color:#14b89f"></i>Essential Plans v2
    </PlanHeading>


    <!-- Essential plans card -->
    <div class="row">


      <PlanCard v-for="(ess, index) in $store.state.plan.essential" :key="ess.id" :plan="ess.name" :storage="ess.storage"
        :traffic="ess.traffic" media="Plex, Jellyfin or Emby Not Allowed"
        :price="$store.state.plan.essentialpriceback[index] + '/mo'"></PlanCard>
      <!-- <PlanCard></PlanCard> -->

    </div>

    <!-- Tank Plans -->
    <PlanHeading class="heading mt-3"><i class='fab fa-codepen'
        style='margin-right:15px; margin-left:10px font-size:35px;color:#db2777'></i>Tank Streaming
      Plans
    </PlanHeading>
    <div class='row'>

      <TankSeries v-for="(ess, index) in $store.state.plan.tank" :key="ess.id" :plan="ess.name" :storage="ess.storage"
        :traffic="ess.traffic" media="Plex, Jellyfin or Emby Included"
        :price="$store.state.plan.tankpriceback[index] + '/mo'"></TankSeries>

    </div>
    <!-- NVME plans -->

    <PlanHeading class="heading mt-3"><i class='fas fa-bolt'
        style='margin-right:15px; margin-left:10px font-size:35px;color:#ea592d'></i>Bolt NVMe Plans v2
    </PlanHeading>
    <div class='row'>

      <NvmePlan v-for="(ess, index) in $store.state.plan.nvme" :key="ess.id" :plan="ess.name" :storage="ess.storage"
        :traffic="ess.traffic" media="Plex, Jellyfin or Emby Included"
        :price="$store.state.plan.nvmepriceback[index] + '/mo'"></NvmePlan>

    </div>

  </div>
</template>

<script>


import { useStore } from 'vuex'
import { onMounted } from 'vue';
export default {
  setup() {
    //  let tankdata = reactive([]);
    //  let essentialdata = reactive([]);
    //  let nvmedata = reactive([]);

    const store = useStore()
    function monthlypriceupdate() {
    store.commit('plan/monthly')
    
    }
    function yearpriceupdate() {
            if (store.state.plan.eurvalid == true){
      store.state.plan.essentialpriceback = store.state.plan.essentialprice.map(function(x) { return parseFloat((x * 12) - ( x * 12 * 0.1)).toFixed(2); })
      store.state.plan.tankpriceback = store.state.plan.tankprice.map(function(x) {  return parseFloat((x * 12) - ( x * 12 * 0.1)).toFixed(2); })
      store.state.plan.nvmepriceback = store.state.plan.nvmeprice.map(function(x) {  return parseFloat((x * 12) - ( x * 12 * 0.1)).toFixed(2); })
      }

      if (store.state.plan.usdvalid == true){
      store.state.plan.essentialpriceback = store.state.plan.essentialprice.map(function(x) { return parseFloat((x  * 12 * 1.04) - ( x * 12 * 1.04 * 0.1)).toFixed(2); })
      store.state.plan.tankpriceback = store.state.plan.tankprice.map(function(x) {  return parseFloat((x * 12 * 1.04) - ( x * 12 * 1.04 * 0.1)).toFixed(2); })
      store.state.plan.nvmepriceback = store.state.plan.nvmeprice.map(function(x) {  return parseFloat((x * 12 * 1.04) - ( x * 12 * 1.04 * 0.1)).toFixed(2); })
      }

      
      if (store.state.plan.gbpvalid == true){
      store.state.plan.essentialpriceback = store.state.plan.essentialprice.map(function(x) { return parseFloat((x * 12 * 0.85) - ( x * 12 * 0.1 * 0.85 )).toFixed(2); })
      store.state.plan.tankpriceback = store.state.plan.tankprice.map(function(x) {  return parseFloat((x * 12 * 0.1 * 0.85) - ( x * 12 * 0.1 * 0.85 )).toFixed(2); })
      store.state.plan.nvmepriceback = store.state.plan.nvmeprice.map(function(x) {  return parseFloat((x * 12 * 0.1 * 0.85) - ( x * 12 * 0.1 * 0.85 )).toFixed(2); })
      }

    }

    function quaterlypriceupdate() {
      if (store.state.plan.eurvalid == true){
      store.state.plan.essentialpriceback = store.state.plan.essentialprice.map(function(x) { return parseFloat(x * 3).toFixed(2); })
      store.state.plan.tankpriceback = store.state.plan.tankprice.map(function(x) {  return parseFloat(x * 3).toFixed(2); })
      store.state.plan.nvmepriceback = store.state.plan.nvmeprice.map(function(x) {  return parseFloat(x * 3).toFixed(2); })
      }

      if (store.state.plan.usdvalid == true){
      store.state.plan.essentialpriceback = store.state.plan.essentialprice.map(function(x) { return parseFloat(x * 3 * 1.04).toFixed(2); })
      store.state.plan.tankpriceback = store.state.plan.tankprice.map(function(x) {  return parseFloat(x * 3 * 1.04).toFixed(2); })
      store.state.plan.nvmepriceback = store.state.plan.nvmeprice.map(function(x) {  return parseFloat(x * 3 * 1.04).toFixed(2); })
      }

      
      if (store.state.plan.gbpvalid == true){
      store.state.plan.essentialpriceback = store.state.plan.essentialprice.map(function(x) { return parseFloat(x * 3 * 0.85).toFixed(2); })
      store.state.plan.tankpriceback = store.state.plan.tankprice.map(function(x) {  return parseFloat(x * 3 * 0.85).toFixed(2); })
      store.state.plan.nvmepriceback = store.state.plan.nvmeprice.map(function(x) {  return parseFloat(x * 3 * 0.85).toFixed(2); })
      }


    }
    function semiannualpriceupdate() {
    
      if (store.state.plan.eurvalid == true){
      store.state.plan.essentialpriceback = store.state.plan.essentialprice.map(function(x) { return parseFloat((x * 6) - ( x * 6 * 0.05)).toFixed(2); })
      store.state.plan.tankpriceback = store.state.plan.tankprice.map(function(x) {  return parseFloat((x * 6) - ( x * 6 * 0.05)).toFixed(2); })
      store.state.plan.nvmepriceback = store.state.plan.nvmeprice.map(function(x) {  return parseFloat((x * 6) - ( x * 6 * 0.05)).toFixed(2); })
      }

      if (store.state.plan.usdvalid == true){
      store.state.plan.essentialpriceback = store.state.plan.essentialprice.map(function(x) { return parseFloat((x  * 6 * 1.04) - ( x * 6 * 1.04 * 0.05)).toFixed(2); })
      store.state.plan.tankpriceback = store.state.plan.tankprice.map(function(x) {  return parseFloat((x * 6 * 1.04) - ( x * 6 * 1.04 * 0.05)).toFixed(2); })
      store.state.plan.nvmepriceback = store.state.plan.nvmeprice.map(function(x) {  return parseFloat((x * 6 * 1.04) - ( x * 6 * 1.04 * 0.05)).toFixed(2); })
      }

      
      if (store.state.plan.gbpvalid == true){
      store.state.plan.essentialpriceback = store.state.plan.essentialprice.map(function(x) { return parseFloat((x * 6 * 0.85) - ( x * 6 * 0.85 * 0.05)).toFixed(2); })
      store.state.plan.tankpriceback = store.state.plan.tankprice.map(function(x) {  return parseFloat((x * 6 * 0.85) - ( x * 6 * 0.85 * 0.05)).toFixed(2); })
      store.state.plan.nvmepriceback = store.state.plan.nvmeprice.map(function(x) {  return parseFloat((x * 6 * 0.85) - ( x * 6 * 0.85 * 0.05)).toFixed(2); })
      }


    }

    function eurfunc() {
      store.commit('plan/monthly')

      

    }

    function gbpfunc() {
      store.commit('plan/GbpCheck')

    }

    function usdfunc() {
     store.commit('plan/UsdCheck')

    }

    onMounted(() => {
      monthlypriceupdate();
      localStorage.removeItem('Admin')
      localStorage.removeItem('AdminLogin')
      store.state.login.AdminLogin = false
      
    })

    return { yearpriceupdate, semiannualpriceupdate, quaterlypriceupdate, monthlypriceupdate,eurfunc,gbpfunc,usdfunc }

  },
}
</script>


<style scoped>
.heading {
  color: whitesmoke;
  font-weight: bold;
  text-shadow: 5px 5px 5px grey;
}

.sub-heading {
  color: whitesmoke;
  opacity: 0.5;
}

#badge {
  opacity: 0.7;
}

.btn {
  border-color: #14b89f;
  color: white;
}

#btn-group {
  margin-left: 60px;
}

#billing {
  background-color: #14b89f;
  border: 1.5px solid black;
}
</style>
