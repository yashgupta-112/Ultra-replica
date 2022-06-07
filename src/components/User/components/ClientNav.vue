<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
       
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li><router-link class="link" to="/client-area/support/home">Client Area</router-link></li>
         <li><router-link class="link" to="/client-area/cp">Control Panel</router-link></li>
      </ul>
      <form class="d-flex" role="search">
       
        <button @click="LogoutToken" class="btn btn-outline-success" type="button">Logout</button>
      </form>
    </div>
  </div>
</nav>
<div class="content">
<router-view></router-view>
</div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    function LogoutToken(){
     console.log("wroking")
     store.commit('login/destroyToken')
     router.push('/')
    }

    return{LogoutToken}
  },
}
</script>

<style scoped>
.navbar{
  /* position: fixed; */
  /* top : 0; */
  width:100%;
}
.link{
  color: whitesmoke;
  font: sans-serif;
  padding-left: 200px;
}
ul{
    padding-left:380px;
}
img{
  padding-left: 180px;
}

</style>