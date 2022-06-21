<template>
  <div class="container">
    <div class="registration-form">
      <form>
        <div class="form-icon">
          <span><i class="fas fa-id-card-alt"></i></span>
        </div>
        <div v-if="EditDone">        <div   class="alert alert-success d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
            <use xlink:href="#check-circle-fill" />
          </svg>
          <div>
            Changes has been made ! :)
          </div>
        </div>
        </div>

        <div class="form-group">
          <input type="text" class="form-control item" id="id" v-model.trim="plan_id" placeholder="Product ID" />
          <p v-if="plan_id_valid">Please fill Plan ID</p>
        </div>
        <div class="form-group">
          <input type="text" class="form-control item" id="name" v-model.trim="plan_name" placeholder="Product Name" />
          <p v-if="plan_name_valid">Please fill Plan Name</p>
        </div>
        <div class="form-group">
          <input type="text" class="form-control item" id="storage" v-model.trim="plan_storage" placeholder="Storage" />
          <p v-if="plan_storage_valid">Please fill Plan Storage</p>
        </div>

        <div class="form-group">
          <input type="text" class="form-control item" id="traffic" v-model.trim="plan_traffic" placeholder="Traffic" />
        <p v-if="plan_traffic_valid">Please fill Plan traffic</p>
        </div>

        <div class="form-group">
          <input type="text" class="form-control item" id="price" v-model.trim="plan_price"
            placeholder="Product Price" />
        <p v-if="plan_price_valid">Please fill Plan price</p>
        </div>

        <div class="form-group">
          <label for="inputState">Plan Type</label>
          <select id="inputState" v-model.trim="plan_type" class="form-control">
            <option selected>essential</option>
            <option>tank</option>W
            <option>nvme</option>
          </select>
          <p v-if="plan_type_valid">Please select Plan type</p>
        </div>
        <div id="check-box">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true"
              v-model.trim="plan_media" />
            <label class="form-check-label" for="inlineRadio1">Media application included</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false"
              v-model.trim="plan_media" />
            <label class="form-check-label" for="inlineRadio2">Media Application not included</label>
          </div>
        </div>
         <p v-if="plan_media_valid">Please fill Media application choice</p>
        <div class="form-group justify-content-center">
          <button @click="sumbit" type="button" class="btn btn-block create-account">
            Sumbit
          </button>
        </div>


      </form>

    </div>

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
    let EditDone = ref(false);
    let plan_id_valid = ref(false);
    let plan_name_valid = ref(false);
    let plan_price_valid = ref(false);
    let plan_type_valid = ref(false);
    let plan_storage_valid = ref(false);
    let plan_traffic_valid = ref(false);
    let plan_media_valid = ref(false);
    
    function validation() {
      if (plan_id.value ===""){
        plan_id_valid.value = true;
      }
       if (plan_name.value ===""){
        plan_name_valid.value = true;
      }
       if (plan_price.value ===""){
        plan_price_valid.value = true;
      }
       if (plan_type.value ===""){
        plan_type_valid.value = true;
      }
       if (plan_storage.value ===""){
        plan_storage_valid.value = true;
      }
       if (plan_traffic.value ===""){
        plan_traffic_valid.value = true;
      }
       if (plan_media.value ===""){
        plan_media_valid.value = true;
      }






    }



    function sumbit() {
      validation();
      axios.put(`https://ultradev-api.herokuapp.com/${plan_id.value}/`, {
        type: plan_type.value,
        name: plan_name.value,
        storage: plan_storage.value,
        traffic: plan_traffic.value,
        media: plan_media.value,
        price: plan_price.value,
      }).then((response) => {
        if (response.status === 200) {
       
          EditDone.value = true
           setTimeout(function () {
        EditDone.value = false;
      }, 2000);
        }
      }).catch(error => {
        console.log(error.message)


      })
     
     
   
    }

    return { plan_id, plan_name, plan_price, plan_type, plan_storage, plan_traffic, plan_media,plan_id_valid, plan_name_valid, plan_price_valid, plan_type_valid, plan_storage_valid, plan_traffic_valid, plan_media_valid, EditDone, sumbit };
  },
};
</script>

<style scoped>
p{
  color:white;
}
.registration-form {
  padding: 10px 0;
}

.registration-form form {
  /* background-color:  */
  background-color: rgb(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 1);
  max-width: 600px;
  margin: auto;
  padding: 50px 70px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon {
  text-align: center;
  background-color: #5891ff;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-bottom: 50px;
  line-height: 100px;
}

.registration-form .item {
  border-radius: 20px;
  margin-bottom: 25px;
  padding: 10px 20px;
}

.registration-form .create-account {
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: #5791ff;
  border: none;
  color: white;
  margin-top: 20px;
}

.registration-form .social-media {
  max-width: 600px;
  background-color: #fff;
  margin: auto;
  padding: 35px 0;
  text-align: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #9fadca;
  border-top: 1px solid #dee9ff;
  -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .social-icons {
  margin-top: 30px;
  margin-bottom: 16px;
}

.registration-form .social-icons a {
  font-size: 23px;
  margin: 0 3px;
  color: #5691ff;
  border: 1px solid;
  border-radius: 50%;
  width: 45px;
  display: inline-block;
  height: 45px;
  text-align: center;
  background-color: #fff;
  line-height: 45px;
}

.registration-form .social-icons a:hover {
  text-decoration: none;
  opacity: 0.6;
}

#check-box {
  border: 1px solid black;
  color: whitesmoke;
  background-color: #212529;
  padding: 5px 2px 2px 2px;
}

@media (max-width: 576px) {
  .registration-form form {
    padding: 50px 20px;
  }

  .registration-form .form-icon {
    width: 70px;
    height: 70px;
    font-size: 30px;
    line-height: 70px;
  }
}

/*# sourceMappingURL=PlanEdit.css.map */
</style>
