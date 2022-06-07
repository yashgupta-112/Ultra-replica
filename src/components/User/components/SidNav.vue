<template>
  <div class="sidebar">
   <div id="side-nav" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 180px;">
    <a class="navbar-brand" href="/">
      <img
        src="./../../../assets/ultra-cc.png"
        
        height="35"
        alt="..."
       
      />
    
    </a>
    <ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item">
       <i class='fas fa-home'></i>
         <router-link to='/client-area/support/home'>Home</router-link>
       
      </li>
      <li class="nav-item">
        <i class='far fa-comment-alt'></i>
         <router-link to='/client-area/support/tickets'>Support Tickets</router-link>
       
      </li>
     <li class="nav-item">
       <i class='far fa-envelope-open'></i>
         <router-link to='/client-area/support/sumbit-ticket'>Open Ticket</router-link>
       
      </li>
      <li>
       <i class='fas fa-shield-alt'></i>
         <router-link to='/client-area/support/order'>Services</router-link>
      </li>
      <li>
        <i class='fas fa-chevron-circle-up'></i>
         <router-link to='/client-area/support/add-on'>Add-ons</router-link>
      </li>
  
    </ul>
    <hr>
    
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar {

  background-color: #f1f1f1;
  position: fixed;
  top : 0;
  height: 100%;
  overflow: auto;
}
#side-nav {
  height: 100%;
}

li{
    padding-top: 50px;
}
i{
    padding-right: 10px;
}
a{
    font-size:1rem;
}
</style>

