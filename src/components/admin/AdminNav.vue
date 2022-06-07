<template>
  <!-- The sidebar -->
  <div class="sidebar">
    <h1 class="visually-hidden">Sidebars examples</h1>

    <div id="side-nav" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src="../../assets/ultra-c.png" width="40" height="40">
        <span id="Admin-headling" class="fs-4 m-x-1 mt-1">Admin Panel</span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/admin-panel/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="router-link" to="/admin-panel/Main-page">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/admin-panel/Plans-update">Update Plans</router-link>
        </li>
        <li>
          <router-link to="/admin-panel/add-plans">Add-New plans</router-link>
        </li>
        <li>
          <router-link to="/admin-panel/create-admin">Create Admin</router-link>
        </li>




        <li>

        </li>
      </ul>
      <hr>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
          data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://icon-library.com/images/naruto-icon/naruto-icon-9.jpg" alt="" width="32" height="32" class="rounded-circle me-2">
          <strong>{{username}}</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a href="http://127.0.0.1:8000/admin" target="_blank">Django Backend</a></li>
          <li><a @click="SignOut" class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>


  </div>

  <!-- Page content -->
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import {ref} from 'vue';
import { useStore } from 'vuex';
import {useRouter} from 'vue-router';
import { onMounted } from 'vue';

export default {
  setup() {
    let username = ref (localStorage.getItem( 'Admin'))
    const store = useStore()
    const router = useRouter()
    function SignOut() {
      localStorage.removeItem('Admin')
      localStorage.removeItem('AdminLogin')
      store.state.login.AdminLogin = false
      router.push('/home')
    }
           

    
   onMounted(() => {
     
      store.state.login.AdminLogin = localStorage.getItem( 'AdminLogin')
      

    })
    
    return{username,SignOut}

  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Reggae+One&display=swap");
.sidebar {
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

#side-nav {
  height: 100%;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

.content {
  margin-left: 280px;
  padding: 1px 16px;
  height: 44.8em;
}

#Admin-headling {
  font-family: 'Grenze Gotisch', cursive;
  text-shadow: 5px 5px 5px black;
}

a.router-link-active {
  color: whitesmoke;
  text-shadow: 5px 5px 5px 5px black;
}

a {
  font-family: 'Reggae One', cursive;
  font-size: 1.4rem;
  color: whitesmoke;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
/*# sourceMappingURL=main.css.map */
</style>