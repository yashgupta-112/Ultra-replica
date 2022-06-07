<template>
    <div class="container">
         <SubHeading class="Sub-para">CUSTOMER SUPPORT</SubHeading>
    <PlanHeading class="heading-support">Support you can depend on</PlanHeading>
   <p class="sub-para muted">Providing exceptional customer support is our passion and we do everything in our </p>
   <p class="sub-para muted">power to ensure that every issue is resolved swiftly and thoroughly.</p>

   <!-- Cards below -->
   <div class="card-group mx-auto mt-5 mb-5" id="card-container" style="max-width: 60rem">
  <div class="card">
    <i class='fas fa-book-reader'></i>
    <div class="card-body">
      <h5 class="card-title">Documentation</h5>
      <p class="card-text">Take a look at our ever-expanding collection of comprehensive guides and tutorials.</p>
     
      <a href="https://docs.usbx.me/" target="_blank" ><small>View Docs</small></a>
    </div>
  </div>
  <div class="card">
    <i class='fab fa-discord' ></i>
    <div class="card-body">
      <h5 class="card-title">Discord Community</h5>
      <p class="card-text">Join us on Discord and connect with our community of helpful, like-minded folks just like you.</p>
     <a href="https://discord.ultra.cc/" target="_blank"  ><small>Discord</small></a>
    </div>
  </div>
  <div class="card">
    <i class='fas fa-keyboard'></i>
    <div class="card-body">
      <h5 class="card-title">Support Tickets</h5>
      <p class="card-text">If you’re stuck, please submit a support ticket and our professional support team will assist you within the hour.</p>
     <a href="https://my.ultraseedbox.com/index.php?rp=/login"  target="_blank" ><small>Open Ticket</small></a>
    </div>
  </div>
</div>

    </div>
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Macondo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,700&display=swap');

.Sub-para{
    text-align: center;
    font-family: 'Macondo', cursive;
    font-weight: bolder;
   background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateX(-10px)
}

.heading-support{
    text-align: center;
    font-family: 'Lobster', cursive;
    color: white;
}

.sub-para{
    text-align: center;
    font-family: 'Lobster', cursive;
    color:white;
    font-size: 22px;
}

#card-container{
    align: center;
}
.card{
    background-color:#18191a;
    color:white;
    border-radius: 5px;
    box-shadow: 0 0 5px grey;
}
i{
    margin-top: 15px;
    size: 12px;
    font-size: 78px;
    margin-left:20px; color:#8b5cf6;
    text-shadow: 0 5px 15px grey;
    margin-top: 45px;
}
h5{
    font-family: 'Permanent Marker', cursive;
    font-weight: bolder;
    font-size:1.7rem;
    font-family: 'Roboto Mono', monospace;
    margin-top: 25px;
}
a{
    font-weight: bold;
    font-style: italic;
    border:1px solid grey;
    padding: 4px;
    border-radius : 4px;
    position: absolute;
    bottom: 25px;
}

a:hover {
 box-shadow: 4px 5px 15px grey;
 color:#8b5cf6;
 font-size: 25px;
 padding:5px
}

.card {
  
  
  width:  300px;
  height: 400px;
  box-shadow: 0 1px 5px #00000099;
  
  
  
  position: relative;
  
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);
}

.card:hover {
  transition-duration: 150ms;
  box-shadow: 0 25px 55px 10px #00000044;
}

.card .glow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  
  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
}
</style>