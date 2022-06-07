
export default {
  namespaced: true,
  state() {
    return {
      essential: [],
      tank: [],
      nvme:[],
      essentialprice: [],
      tankprice: [],
      nvmeprice: [],
      essentialpriceback: [],
      tankpriceback: [],
      nvmepriceback: [],
      allplanlist : [],
      eursign: '€',
      usdsign: '$',
      gbpsign: '£',
      currency:'€',
      yearstat: false,
      monthlystat: true,
      semi: false,
      quater: false,
      eurvalid: true,
      gbpvalid: false,
      usdvalid: false,

    };
  },

mutations:{ 
 
  monthly(state){
    state.essentialpriceback = state.essentialprice
    state.tankpriceback = state.tankprice 
    state.nvmepriceback = state.nvmeprice 
    state.currency = state.eursign;
  },

  yearly(state){
    
    state.monthlystat = false
    state.yearstat = true
    state.quater = false
    state.semi = false
    
  },

  quaterly(state){
    state.monthlystat = false
    state.yearstat = false
    state.quater = true
    state.semi = false
  
  },

  semiannual(state){
    state.monthlystat = false
    state.yearstat = false
    state.quater = false
    state.semi = true
    
  },

  GbpCheck(state){
    state.currency = state.gbpsign
    state.usdvalid = false;
    state.eurvalid = false;
    state.gbpvalid = true; 
    state.essentialpriceback =  state.essentialprice.map(function(x) { return parseFloat(x * 0.85).toFixed(2); });
    state.tankpriceback = state.tankprice.map(function(x) { return parseFloat(x  * 0.85).toFixed(2); }); 
    state.nvmepriceback = state.nvmeprice.map(function(x) { return parseFloat(x  * 0.85).toFixed(2); });
    
  },

  UsdCheck(state){
    state.usdvalid = true;
    state.currency = state.usdsign;
    state.eurvalid = false;
    state.gbpvalid = false; 
    state.essentialpriceback =  state.essentialprice.map(function(x) { return parseFloat(x * 1.04).toFixed(2); });
    state.tankpriceback = state.tankprice.map(function(x) { return parseFloat(x * 1.04).toFixed(2); }); 
    state.nvmepriceback = state.nvmeprice.map(function(x) { return parseFloat(x  * 1.04).toFixed(2); });
      
  },

  EurCheck(state){
    state.currency = state.eursign;
    state.eurvalid = true;
    state.gbpvalid = false;
    state.usdvalid = false;
    state.essentialpriceback = state.essentialprice
    state.tankpriceback = state.tankprice 
    state.nvmepriceback = state.nvmeprice 
  }

  },
// action start here
actions: {

  basefunction(){

  }
 
}


// action end here

};
