<template>
  <div class="flex">
    <div class="container">
      <div class="row mx-auto mt-4">
        <div class="col mt-5">
          <h2>CURRENT SUPPORT </h2>
          <h2>TICKET STATS</h2>
          <p>Not only do we aim to resolve issues with precision, <br>we aim to do it quickly and without
            <br>compromise.</p>
        </div>
        <div class="col mt-5">
          <h1>{{$store.state.info.WaitingTime}}</h1>
          <h4>Waiting for First Reply</h4>
        </div>
        <div class="col mt-5">
          <h1>{{$store.state.info.FirstReply}} minutes</h1>
          <h4>Average First Reply</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
// import axios from "axios";
import { useStore } from 'vuex'
export default {
  setup() {


    const store = useStore()
    function GetInfo() {

      fetch('https://ultradev-api.herokuapp.com/info-api').then(response => {
        if (response.ok) {
          return response.json();
        }
      }).then(data => {
        store.state.info.WaitingTime = data[0].waiting
        store.state.info.FirstReply = data[0].reply
        store.state.info.LatestNews = data[0].news

    
      })



    }


    // console.log("info",this.replylist)

    onMounted(() => {
      this
      GetInfo();

    })


  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Qwigley&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Diplomata&display=swap');


.col {
  text-align: center;
}

h2 {
  text-align: left;
  font-family: 'Metal Mania', cursive;
  background: -webkit-linear-gradient(#eee, #d57cd2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
}

p {
  text-align: left;
  font-family: 'Qwigley', cursive;
  font-size: 2rem;
  margin-top: 9px;
  color: white
}

h1 {
  text-align: center;
  font-family: 'Diplomata', cursive;
  color: white
}

h3 {
  font-family: 'Diplomata', cursive;
  font-size: 2rem;
  color: white
}

h4 {
  font-family: 'Diplomata', cursive;
  font-size: 1rem;
  color: white
}
</style>
