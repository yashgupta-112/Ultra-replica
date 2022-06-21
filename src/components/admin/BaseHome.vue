<template>
  <h2 class="title">Admin DashBoard</h2>
  <hr class="line" />
  <div class="container">
    <div class="row mt-3">
      <div class="col-6">
        <div class="card" id="home-form">
          <div class="card-body">
            <h5 class="card-title">Update_Home_Page_Info</h5>
            <hr>
            <label for="exampleFormControlInput1" class="form-label">Announcements <i
                class='fas fa-volume-down'></i></label>
            <input type="text" v-model.trim="annouce" class="form-control" id="form-element" />
            <label for="exampleFormControlInput1" class="form-label mt-4">Waiting For reply <i
                class='fas fa-comment-dots'></i></label>
            <input type="number" v-model.trim="waitvar" class="form-control" id="form-element2" />
            <label for="exampleFormControlInput1" class="form-label mt-4">Average First Reply <i
                class='fas fa-hands-helping'></i></label>
            <input type="number" v-model.trim="replyvar" class="form-control" id="form-element1" />
            <div class="d-grid gap-2 col-6 mx-auto mt-2">

              <button class="btn btn-primary" @click="Sumbit" type="button">Sumbit</button>
              <hr>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card" id="Graph">
          <div class="card-body">
            <h5 class="card-title">Yearly Sales</h5>
            <hr>
            <SalesChart></SalesChart>
          </div>
        </div>
        <div class="card" id="AllPlans">
          <div class="card-body">
            <h5 class="card-title">UCP-V2 Progess Report</h5>
            <hr style="color:white; font-size:">
            <UcpProgress></UcpProgress>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SocialMedia></SocialMedia>
  <hr>
  <div class="flex ">
  <div class="row">
    <div class="col-6">
      <StaffList></StaffList>
      </div>
      <div class="col-6">
         <div class="card" id="Gra" height="100" width="100">
          <div class="card-body">
            <h5 class="card-title">Server Load</h5>
            <hr>
            <ServerLoad></ServerLoad>
          </div>
        </div>
    
      </div>
  </div>
  <br>
  <div class="container">
    <AllPlan></AllPlan>
  </div>
  </div>
</template>

<script>
import {ref } from 'vue';
import axios from 'axios'
export default {
  setup() {
    let annouce = ref('')
    let waitvar = ref('')
    let replyvar = ref('')

    function Sumbit() {
      console.log(annouce.value,waitvar.value,replyvar.value)
       axios.post("https://ultradev-api.herokuapp.com/sumbit-info", {
                waiting: waitvar.value,
                news: annouce.value ,
                reply: replyvar.value,
            }).then(response =>{
              console.log(response)
            })
           
    }

    return{annouce,waitvar,replyvar,Sumbit}

},
}
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Koulen&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap");
.title {
  margin-left: 5px;
  margin-top: 10px;
  font-family: 'Merriweather', serif;
}

.line {
  color: whitesmoke;
}

#home-form {
  height: 100%;
  width: 30rem;
  margin-left: 80px;
}

#AllPlans {
  margin-top: 3px;
  width: 25rem;
}

#Graph {
  width: 25rem;
}

.card {
  background-color: #3a4058;
}

h5 {
  color: whitesmoke;
}

i {
  color: #e65572;
  margin-left: 2px;
}

.card-title {
  font-family: 'Koulen', cursive;
}

.form-label {
  font-family: 'Playfair Display', serif;
  color: white;
}

#sumbit {
  height: 2p;
  margin-top: 15px;
}

.label {
  padding: .3em;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  display: none;
  color: #333;
}

.wrapper {
  display: block;
  border: 1px solid #555;
  position: relative;
}
/*# sourceMappingURL=dashboard.css.map */
.flex{
  height:200px;
}
</style>

