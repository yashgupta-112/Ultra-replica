<template>
    <div id="soci" class="d-flex justify-content-around">
        <div id="social" class="row mt-3 ">
            <div class="col-4 mt" id="social-col">
                <div class="card  mb-3" id="tweet" style="max-width: 20rem; max-height: 18rem;">
                    <i id="tweet-logo" class='fab fa-twitter mt-1'></i>
                    <div class="card-body">
                        <h5 class="card-title  mb-3">Total Twitter Users</h5>
                        <p id="count" class="card-text">4024</p>
                    </div>
                </div>
            </div>
             <div class="col-4 mt" id="social-col">
                <div class="card  mb-3" id="discord" style="max-width: 40rem; max-height: 18rem;">
                    <i id="discord-logo" class='fab fa-discord mt-1' ></i>
                    <div class="card-body">
                        <h5 class="card-title ">Total Discord Users</h5>
                        <p id="count" class="card-text">8671</p>
                    </div>
                </div>
            </div>
            
             <div class="col-4 mt" id="social-col">
                <div class="card  mb-3" id="client" style="max-width: 18rem; max-height: 18rem;">
                    <i id="client-logo" class='fas fa-street-view mt-1'></i>
                    <div class="card-body">
                        <h5 class="card-title mb-3">Total Ultra <br> Users</h5>
                        <p id="count" class="card-text">12.8K</p>
                    </div>
                </div>
            </div>
            
            

        </div>
    </div>
</template>


<style scoped>
h5 {
  text-align: center;
  font-size: 1rem;
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

#tweet {
  background-color: rgba(54, 162, 235, 0.2);
  border: 1px solid #36a2eb;
}

#discord {
  background-color: rgba(255, 99, 132, 0.2);
  border: 1px solid #ff6384;
}

#client {
  background-color: rgba(75, 192, 192, 0.2);
  border: 1px solid #4bc0c0;
}

#tweet-logo {
  color: #36a2eb;
  font-size: 40px;
  z-index: 1;
  margin-left: 54px;
}

#discord-logo {
  color: #ff6384;
  font-size: 40px;
  z-index: 1;
  margin-left: 45px;
}

#client-logo {
  color: #4bc0c0;
  font-size: 40px;
  z-index: 1;
  margin-left: 50px;
}

#count {
  font-size: 35px;
  text-align: center;
  margin-top: 15px;
}
/*# sourceMappingURL=social.css.map */
</style>