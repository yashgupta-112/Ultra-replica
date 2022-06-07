<template>
    <div class="container">
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Success</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Ticket has been Raised We will get back to you as soon as possible.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>
        
        <form>
            <div class="form-group">
                <label for="inputAddress">Subject</label>
                <input type="text" v-model.trim="subject" class="form-control" id="inputAddress" placeholder="">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Department</label>
                <br>
                <select v-model.trim="department" class="custom-select" id="exampleFormControlSelect1">
                    <option selected>Support</option>
                    <option>Sales</option>
                    <option>UCP</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Priority</label>
                <br>
                <select v-model.trim="priority" class="custom-select" id="exampleFormControlSelect1">
                    <option>Medium</option>
                    <option>Low</option>
                    <option>High</option>

                </select>
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea v-model.trim="message" class="form-control" id="exampleFormControlTextarea1"
                    rows="7"></textarea>
            </div>
            <button type="button" @click="sumbit" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">Sumbit</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from "axios";
export default {
    setup() {
        let user = ref('');
        let subject = ref('');
        let department = ref('');
        let priority = ref('');
        let message = ref('');
        let FormSumbit = ref(false);

        function sumbit() {
            axios.post("http://127.0.0.1:8000/sysadmin", {
                user: localStorage.getItem('ClientName'),
                subject: subject.value,
                priority: priority.value,
                department: department.value,
                message: message.value,
            }).then((response) => {
                if (response.status === 200){
                    FormSumbit.value = false;
                    subject.value = "";
                    priority.value = "";
                    department.value = "";
                    message.value = "";

                }
            })
        }

        return { subject, user, department, priority, message, sumbit, FormSumbit }
    },
}
</script>

<style scoped>
.container {
    background-color: rgb(255, 99, 132, 0.2);
    border: 1px solid rgb(255, 99, 132);
    ;
    padding: 15px
}

button {
    background-color: rgb(0, 0, 0, 0.2);
    border: 1px solid black;
}

.form-control {
    background-color: rgb(0, 0, 0, 0.2);
    border: 1px solid black;
    margin-top: 5px;
}

.custom-select {
    width: 100%;
    background-color: rgb(0, 0, 0, 0.2);
    border: 1px solid black;
    margin-top: 5px;
    height: 45px;
    color:white;
}

label {
    color: snow;
}

</style>