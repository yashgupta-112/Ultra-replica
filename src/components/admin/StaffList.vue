<template>

  <table class="table ">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Email</th>
        <th scope="col">USB-ID</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>1</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>2</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>3</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>4</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>5</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>1</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>1</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>1</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>1</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto@usbxme</td>
        <td>1</td>
      </tr>

    </tbody>
  </table>

  <div class="jumbotron">
    <p class="Network-heading">Network Tools</p>
    <div class="d-flex justify-content-around mt-5">
    <button type="button" class="btn btn btn-circle btn-xl"><i class='fas fa-network-wired'></i> </button>

      <button type="button" class="btn btn btn-circle btn-xl"><i class='fas fa-server'></i> </button>
      <button type="button" class="btn btn btn-circle btn-xl"><i class='fas fa-database'></i></button>
     </div>
<div class="d-flex justify-content-around mt-2">
  <p>Ultra Route</p>
  <p>Ultra Network</p>
  <p>Ultra API</p>
</div>
  </div>
</template>
<script>
import axios from 'axios'


export default {
  mounted() {
    this.GetTicketdata();
  },

  data() {
    return{
    AllQuery : []
  }
  },
  methods: {
        GetTicketdata(){
          
          axios.get('http://127.0.0.1:8000/plan-api').then((response) =>{
            // console.log(response.data)
            this.$store.state.plan.allplanlist = response.data
          })
  
    },


  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inder&display=swap');

.table {
  background-color: rgb(255, 206, 86, 0.2);
  border: 1px solid rgba(255, 206, 86, 1);

}

.jumbotron {
  background-color: rgba(153, 102, 255, 0.2);
  border: 1px solid rgba(153, 102, 255, 1);
  height: 37%;
}

.Network-heading {
  text-align: center;
  font-family: 'Inder', sans-serif;
  font-size: 1.5rem;
  margin-top: 5px;
}

.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 24px;
  line-height: 1.33;
  background-color: rgba(75, 192, 192, 0.2);
  border: 1px solid #4bc0c0;
}
</style>