<template>
    <div class="container mt-3">
        <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Plan Name</label>
    <input type="text" v-model.trim="plan_name" class="form-control" id="exampleFormControlInput1" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Storage Size</label>
    <input type="number" v-model.trim="plan_storage" class="form-control" id="exampleFormControlInput1" placeholder="Storage in TB">
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlInput1">Traffic</label>
    <input type="number" v-model.trim="plan_traffic" class="form-control" id="exampleFormControlInput1" placeholder="Traffic in TB">
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Pricing</label>
    <input type="number" v-model.trim="plan_price" class="form-control" id="exampleFormControlInput1" placeholder="Price in EUR">
  </div>

  <div class="form-check form-check-inline">
  <input class="form-check-input" v-model.trim="plan_media" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true">
  <label class="form-check-label" for="inlineRadio1">Media application included</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" v-model.trim="plan_media" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false">
  <label class="form-check-label" for="inlineRadio2">Media Application not included</label>
</div>
  <fieldset class="form-group row">
    <legend class="col-form-label col-sm-2 float-sm-left pt-0 mt-3">Plans Type</legend>
    <div class="col-sm-10">
      <div class="form-check mt-3">
        <input class="form-check-input" v-model.trim="plan_type" type="radio" name="gridRadios" id="gridRadios1" value="essential" checked>
        <label class="form-check-label" for="gridRadios1">
          Essential Plans
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" v-model.trim="plan_type" type="radio" name="gridRadios" id="gridRadios2" value="tank">
        <label class="form-check-label" for="gridRadios2">
          Tank Storage plans
        </label>
      </div>
     <div class="form-check">
        <input class="form-check-input" v-model.trim="plan_type" type="radio" name="gridRadios" id="gridRadios2" value="nvme">
        <label class="form-check-label" for="gridRadios2">
          NVME plans
        </label>
      </div>
    </div>
  </fieldset>


   <button type="button" @click="sumbit" class="btn btn-primary mb-2">{{button_val}}</button>
</form>
    </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    let plan_id = ref("");
    let plan_name = ref("");
    let plan_price = ref("");
    let plan_type = ref("");
    let plan_storage = ref("");
    let plan_traffic = ref("");
    let plan_media = ref("");
    let FormSumbit = ref(false);
    let button_val = ref("Sumbit");



    function sumbit() {
      
      console.log(
      axios.post("http://127.0.0.1:8000/new-plan", {
        type: plan_type.value,
        name: plan_name.value,
        storage: plan_storage.value,
        traffic: plan_traffic.value,
        media: plan_media.value,
        price: plan_price.value,
      }).then((response) => {
        if (response.status === 200) {
       
          button_val.value = "Successful"
           setTimeout(function () {
        button_val.value = "Sumbit";
      }, 2000);
        }
      }).catch(error => {
        console.log(error.message)


      })
      )
     

    }

    return { plan_id, plan_name, plan_price, plan_type, plan_storage, plan_traffic, plan_media,FormSumbit,button_val,sumbit };
  },
};
</script>


<style scoped>
form{
    background-color: rgba(75, 192, 192, 0.2);
  border: 1px solid #4bc0c0;
    padding : 35px;
}
label{
    color:whitesmoke;
    margin-bottom: 5px;
}
legend{
     color:whitesmoke;
}
</style>