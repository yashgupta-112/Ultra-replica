<template>
    <main>
  <div id="admin-home" class="px-4 py-5 my-5 text-center">
    <img id="logo" class="logo d-block mx-auto mb-1" src="../../assets/ultra-c.png" alt="" width="80" height="80">
    <h1 class="display-5 fw-bold">Welcome, {{username}}</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">This is Admin Panel it will allow you to make changes to Ultra Backend.</p>
      
    </div>
  </div>

 
  </main>

</template>

<script>
export default {
  data (){
    return{
      username : localStorage.getItem( 'Admin')
    }
  }
}
</script>

<style scoped>
#admin-home {
  border: 1px solid white;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-right: 80px;
  margin-left: 80px;
  -webkit-box-shadow: 10px 10px 10px grey;
          box-shadow: 10px 10px 10px grey;
}

.logo {
  -webkit-box-shadow: 2px 2px 10px grey;
          box-shadow: 2px 2px 10px grey;
}
/*# sourceMappingURL=Adminhome.css.map */
</style>