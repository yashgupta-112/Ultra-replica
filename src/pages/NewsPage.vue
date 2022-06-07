<template>
<div class="container">   
        <PlanHeading class="plan-heading">NEWS UPDATES</PlanHeading>
    <PlanHeading class="heading">Announcements</PlanHeading>
    <SubHeading class="sub-heading">Catch up with the latest news from the Ultra.cc team.</SubHeading>
    <div class="row mt-4">
  <div class="col-sm-8">

    <BaseNews></BaseNews>
     <BaseNews></BaseNews>
  </div>
      <div class="col-sm-4">
    <div id ="group" class="btn-group-vertical">
<button id="btn" type="button" class="btn btn-outline-light">2022 April</button>
<button type="button" class="btn btn-outline-light">2022 March</button>
<button type="button" class="btn btn-outline-light">2022 February</button>
<button type="button" class="btn btn-outline-light">2022 January</button>
<button type="button" class="btn btn-outline-light">2021 December</button>
<button type="button" class="btn btn-outline-light">2021 November</button>
</div>
</div>

</div>
</div>

</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
.plan-heading {
    color:whitesmoke;
    text-align:center;
    margin-top: 10px;
    font-family: 'Permanent Marker', cursive;
}
.heading{
color:whitesmoke;
    text-align:center;
    margin-top: 10px;
    font-family: 'Bangers', cursive;
}
.sub-heading{
color:whitesmoke;
    text-align:center;
    margin-top: 10px;
    font-family: 'Bangers', cursive;
}
#group {
    width: 70%;
}
</style>