<template>
 <div class="container">
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <button type="button" id="btnannouce" class="btn btn-outline-info">
       <svg xmlns="http://www.w3.org/2000/svg" id="ansymbol" width="16" height="16" fill="currentColor" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
</svg>
</button>
<div class="animated">
 
  <span class="annoucement">{{$store.state.info.LatestNews}}</span>
</div>
        <h1>SPECIALIZED APPS</h1>
    <h2> HOSTING</h2>
    <h3>Expertly-tuned shared apps hosting </h3>
   <h3>starting at just <span class ="cost">€4.95EUR</span> per month</h3>
     <img src="../../assets/image1.png" class="d-block w-100" alt="...">
    </div>
  
  </div>
</div>
</div>
</template>


<style scoped>
.animated {
  overflow: hidden;
  width: 280px;
  white-space: nowrap;
  border-radius:0 15px 15px 0;
  height:25px;
}

.animated > * {
  display: inline-block;
  position: relative;
  animation: 3s linear 0s infinite alternate move;
  /* bottom:250px */
}

.animated > *.min {
  min-width: 100%;
}

.annoucement{
  color:white;
  position:relative;
  bottom: 5px;
  left: 60px;
}
#ansymbol{
  color:white;
  position: relative;
  bottom: 8px;
  right: 8px;
}
#btnannouce{
position:relative;
height: 25px;
width: 25px;
  top:277px;
  background-color:#14b89f;
  border-radius:1px 1px 0 0;
}

@keyframes move {
  0%,
  25% {
    transform: translateX(0%);
    left: 0%;
  }
  75%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
}

/* Non-solution styles */



.animated {
  font-size: 15px;
  font-family: sans-serif;
  border: 0.1rem solid #14b89f;
  /* margin: 1rem; */
  position: relative;
  top:252px;
  left: 26.5px;
  background-color: #14b89f;
}

.animated > * {
  box-sizing: border-box;
  padding: .5rem 1rem;
}


.container{
    background-color:#18191a;
     position: relative;
    height: 600px;
    
    
}

img {
    position: relative;
    left:240px;
    bottom:210px;
    height:100%;    
}

h1{
    position: relative;
    color: white;
    top: 260px;
    font-family:cursive;
}

h2{
     position: relative;
     color: white;
     top:260px;
     font-family:cursive;
}
h3{
     position: relative;
     color: white;
     top:260px;
     font-family:cursive;
     opacity: 0.6;
}
svg{
  color: white;
}
.cost{
  font-style: bold;
  background: linear-gradient(#FFF65C, #3A2C00 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 320px) and (max-width: 500px) {
img {
    position: relative;
    left:20px;
    bottom:199px;
    height:100%;    
}

}

</style>