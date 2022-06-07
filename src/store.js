import {createStore} from 'vuex';
import PlanModule from './store/plan/index.js'
import InfoModule from './store/info/index.js'
import LoginModule from './store/login/index.js'



const store = createStore({
    modules: {
        plan : PlanModule,
        info : InfoModule,
        login : LoginModule,
    },
   

});

export default store;