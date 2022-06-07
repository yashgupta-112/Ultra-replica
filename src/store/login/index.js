export default {
    namespaced: true,
    state(){
        return{
            AuthFail: true,
            AdminLogin: false,
            AdminUsername:'',
            acesstoken:"",
            refreshtoken: "",
            Authenticated: false,
            localStorage : "",
            loginfail: false,
            ClientName : '',
            totalticket: '',
            totalservice: '',
            orderstatus: false,
        }
    },
    mutations: {
        setTokens(state){
         if (localStorage.getItem('token') !== null) {
             state.Authenticated = true;
         }
        },
    
        destroyToken(state){
            localStorage.clear();
            state.Authenticated = false;
           
        }
    }
    

}
