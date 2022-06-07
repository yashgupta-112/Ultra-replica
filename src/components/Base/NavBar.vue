<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
   <a class="navbar-brand " href="/">
      <img src="../../assets/ultra-c.png" alt="" width="45" height="45">
      <img src="../../assets/ultralogo.png" alt="" width="150" height="58">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  m-2 mb-lg-0">
       
        <li class="nav-item">
          <router-link to="/news">News</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pricing">Pricing</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
 
        </li>
        <li class="nav-item">
         <a target="_blank"  href="https://docs.usbx.me/">Docs</a>
          </li>
      </ul>
      <section class="mt-1">        
        <button class="glow-on-hover" @click="$router.push('admin')" id="admin-btn" type="submit" ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="currentColor" class="bi bi-box-arrow-in-right my-1 m-xl-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>Admin Pannel </button>
        <button class=" glow-on-hover" @click="$router.push('login')" id="user-btn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-circle  m-xl-1 " viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>User Login</button>
      </section>

    </div>
  </div>
</nav>
</template>




<style scoped>
svg{
  color:#14b89f;
  /* background-color:#14b89f; */

}

.glow-on-hover {
    width: 140px;
    height: 35px;
    border: none;
    outline: none;
    color:#14b89f;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    margin-top: 10px;
    margin-right: 3px;
    font-color: #14b89f;
}

/* .glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
} */

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

nav{
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  
  
 
}

a.router-link-active {
  color: whitesmoke;
  border: 0px solid white;
  padding : 2px 2px 2px 1px;
  border-radius : 5px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Tapestry', cursive;
  font-family: 'Ubuntu', sans-serif;
  color: #fff;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 40px #0ff,
    0 0 80px #0ff,
    0 0 90px #0ff,
    0 0 100px #0ff,
    0 0 150px #0ff;      
}
a{
  color: whitesmoke;
  font-family: 'Roboto', sans-serif;
  font-family: 'Tapestry', cursive;
  font-size: 20px;
  padding: 2px 2px 4px 8px;
  margin-left: 2px;
}
li{
  margin-left: 10px;
}
</style>



