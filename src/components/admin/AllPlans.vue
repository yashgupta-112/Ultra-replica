<template>
    <div class="container mt-3">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Plan ID</th>
      <th scope="col">Plan Name</th>
      <th scope="col">Storage</th>
      <th scope="col">Traffic</th>
      <th scope="col">Media Application</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody v-for="items in this.$store.state.plan.allplanlist" :key ="items.name">
    <tr>
      <th scope="row">{{items.id}}</th>
      <td>{{items.name}}</td>
      <td>{{items.storage}}</td>
      <td>{{items.traffic}}</td>
      <td v-if="items.media"><i class="fas fa-check-square" style="color:greenyellow"></i></td>
      <td v-if="!items.media"><i class='far fa-window-close' style="color:red"></i></td>
      <td>{{items.price}} EUR</td>
      
    </tr>
  </tbody>
</table>
    </div>
    <br>
</template>


<style scoped>
.container {
     background-color: rgba(75, 192, 192, 0.2);
  border: 1px solid #4bc0c0;
}

th{
    color: whitesmoke
}
td{
  color: whitesmoke;
  padding:10px;
}
i{
  margin-left:38px;
}
button{
  height:30px;
  margin-top:3px;
  text-align: center;
}
</style>