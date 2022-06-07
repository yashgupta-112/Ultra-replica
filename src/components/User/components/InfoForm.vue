<template>
<div class="container mt-4">
<form>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="validationDefault01" value="" required>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="validationDefault02" value="" required>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="validationDefault03" required>
    </div>
   <div class="col-md-6 mb-3">
      <label for="validationDefault03">Country</label>
      <input type="text" class="form-control" id="validationDefault03" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" class="form-control" id="validationDefault05" required>
    </div>
  </div>
<button class="btn btn-primary" type="submit">Submit form</button>
</form>

</div>

</template>

<style scoped>
.container{
      background-color: rgb(20, 184, 159, 0.2);
    border: 1px solid #14b89f;
    padding:25px
}
label{
    color:aliceblue;
    margin-bottom:5px;
}
input{
    background-color: rgb(0,0,0, 0.2);
    border: 1px solid black;
}
button{
    background-color: rgb(0,0,0, 0.2);
    border: 1px solid black;
}
</style>