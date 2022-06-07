<template>
  <div class="container mt-4">
    <table class="table">
      <thead>
        <tr>
         
          <th scope="col">Department</th>
          <th scope="col">Subject</th>
          <th scope="col">Status</th>
          <th scope="col">Ticket</th>
        </tr>
      </thead>
      <tbody v-for="items in alltickets" :key="items.id">
        <tr>
         
          <td>{{items.department}}</td>
          <td>{{items.subject}}</td>
          <td>{{items.priority}}</td>
          <td>{{items.create_time.substring(0,18)}}</td>
        </tr>


      </tbody>
    </table>

  </div>

</template>

<script>
import {ref} from "vue";
import { useStore } from 'vuex'
import { onMounted } from 'vue';
import axios from "axios";
export default {
  setup() {
   const store = useStore()
   let username = ref ('');
   let alltickets = ref ('');
   username.value = localStorage.getItem('ClientName')

   function fetch_ticket(){
     axios.get(`http://127.0.0.1:8000/fetch-ticket/${username.value}/`).then((response)=>{
       store.state.login.totalticket = response.data.length
       alltickets.value = response.data
       
     })
   }

  onMounted(() => {

    fetch_ticket();
  })

   return{username,alltickets,fetch_ticket}
  },
}
</script>

<style scoped>
.table {
  background-color: rgba(220, 219, 219, 0.2);
  border: 1px solid rgb(220, 219, 219);
}

th {
  color: azure;
}

tr {
  color: azure;
}
</style>