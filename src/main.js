import { createApp } from 'vue'
import App from './App.vue'
// component import here
import NavBar from './components/Base/NavBar.vue'
import ImageCard from './components/Base/ImageCrousel.vue'
import PlanHeading from './components/Base/PlanHeading.vue'
import SubHeading from './components/Base/SubHeading.vue'
import PricingComponent from './components/PricingComponent.vue'
import PlanBadge from './components/plan/PlanBadge.vue'
import PlanCard from './components/plan/PlanCard.vue'
import ContactPage from './components/ContactPage.vue'
import ContactForm from './components/ContactForm.vue'
import TankSeries from './components/plan/TankSeries.vue'
import FooterCom from './components/FooterCom.vue'
import BaseNews from './components/Base/BaseNews.vue'
import LoginPage from './components/Login/LoginPage.vue'
import BaseAdmin from './components/Login/BaseAdmin.vue'
import NvmePlan from './components/plan/NvmePlans.vue'
import SupportCom from './components/Base/SupportComp.vue'
import SupportInfo from './components/Base/SupportInfo.vue'
import AdminTool from './components/admin/AdminTool.vue'
import AdminNav from './components/admin/AdminNav.vue'
import PlanUpdate from './components/admin/PlanUpdate.vue'
import SalesChart from './components/admin/SalesChart.vue'
import UcpProgress from './components/admin/UcpProgess.vue'
import SocialMedia from './components/admin/SocialMedia.vue'
import StaffList from './components/admin/StaffList.vue'
import ServerLoad from './components/admin/ServerLoad.vue'
import AllPlan from './components/admin/AllPlans.vue'
import UserHome from './components/User/UserHome.vue'
import ClientNav from './components/User/components/ClientNav.vue'
import SideNav from './components/User/components/SidNav.vue'
import BillingComponent from './components/User/components/BuyPlan.vue'
import InfoForm from './components/User/components/InfoForm.vue'
import OrderComp from './components/User/components/OrderComp.vue'
import TicketTable from './components/User/components/TicketTable.vue'
import AddonCard from './components/User/components/AddonCard.vue'
import OpenTicket from './components/User/components/OpenTicket.vue'
import BuyCard from './components/User/components/BuyCard.vue'
// Router and store are registered below

import router from './router.js';
import store from './store.js';
const app = createApp(App)
// Register component here
app.component('BuyCard',BuyCard)
app.component('OpenTicket',OpenTicket)
app.component('AddonCard',AddonCard)
app.component('TicketTable',TicketTable)
app.component('NavBar',NavBar)
app.component('ImageCard',ImageCard)
app.component('PlanHeading',PlanHeading)
app.component('SubHeading',SubHeading)
app.component('PricingComponent',PricingComponent)
app.component('PlanBadge',PlanBadge)
app.component('PlanCard',PlanCard)
app.component('ContactPage',ContactPage)
app.component('ContactForm',ContactForm)
app.component('TankSeries',TankSeries)
app.component('FooterCom',FooterCom)
app.component('BaseNews',BaseNews)
app.component('LoginPage',LoginPage)
app.component('BaseAdmin',BaseAdmin)
app.component('NvmePlan',NvmePlan)
app.component('SupportCom',SupportCom)
app.component('SupportInfo',SupportInfo)
app.component('AdminTool',AdminTool)
app.component('AdminNav',AdminNav)
app.component('PlanUpdate',PlanUpdate)
app.component('SalesChart',SalesChart)
app.component('UcpProgress',UcpProgress)
app.component('SocialMedia',SocialMedia)
app.component('StaffList',StaffList)
app.component('ServerLoad',ServerLoad)
app.component('AllPlan',AllPlan)
app.component('UserHome',UserHome)
app.component('ClientNav',ClientNav)
app.component('SideNav',SideNav)
app.component('BillingComponent',BillingComponent)
app.component('InfoForm',InfoForm)
app.component('OrderComp',OrderComp)
// user account component


// router gaurd

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
      if (localStorage.getItem('AdminLogin') ==null) {
        next({ name: '/admin' })
        router.push('/')
      } else {
        next()
      }
    } else {
      next()
    }
  })
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin)) {
      if (localStorage.getItem('token') ==null) {
        next({ name: '/login' })
        router.push('/')
      } else {
        next()
      }
    } else {
      next()
    }
  })
  

app.use(router)
app.use(store)
app.mount('#app')