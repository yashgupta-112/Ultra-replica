<template>
<div class ="row mt-3">
    
<div class ="col-md-8">
    <h1 class="mb-1">Send us a message</h1>
<h3 class="mb-4">Expect to receive a reply within 3-5 business days.</h3>
<form class="row g-3 p-3">
  <div id="contact-page" class="col-md-6">
    <label for="validationDefault01" class="form-label">Full Name *</label>
    <input type="text" class="form-control" id="validationDefault01"  required>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Email *</label>
    <input type="text" class="form-control" id="validationDefault02" required>
  </div>
  <div class="col-md-12">
    <label for="validationDefault02" class="form-label">Please Type your message</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
 
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        We require the contact information you provide in order to contact you about our products and services. For information about our privacy practices and commitment to protecting your privacy, please review our <span>Privacy & Data Handling Policy</span>.
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</div>

<div id="info" class ="col-md-4 mt-5">
    <h2 class="mt-5">Registered Office</h2>
    <h4>SLASHN SERVICES PTE. LTD.</h4>
    <h5>10 Anson Road,</h5>
    <h5>#22-02 International Plaza,</h5>
    <h5>Singapore 079903</h5>
    <a href="">support@ultraseedbox.com</a>
</div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chicle&display=swap');
label{
    color:white;
}
form{
    border:2px solid grey;
    box-shadow: 5px 5px 5px rgb(182, 172, 172);
}
h1{
     color:white;
     /* text-shadow: 5px 5px 5px rgb(138, 16, 245); */
}
h3{
     color:white;
    /* text-shadow: 5px 5px 5px rgb(138, 16, 245); */
}
span{
    color:whitesmoke;
    text-shadow: 7px 7px 8px rgb(138, 16, 245);
}
#info {
    position:relative;
    top:45px;
     border:2px solid grey;
     margin-left: 15px;
    box-shadow: 5px 5px 5px rgb(182, 172, 172);
    height:400px;
    width:330px;
}
h2{
    color:white;
    font-family: 'Chicle', cursive;
}
h4{
    color:white;
    font-family: 'Chicle', cursive;
}
h5{
    color:white;
    font-family: 'Chicle', cursive;
}
a{
     color:white;
    text-shadow: 5px 5px 5px powderblue;
    font-weight: bold;
    font-size: 18px;
}
</style>