import { createRouter,createWebHistory } from "vue-router";
// pages import below
import ContactPage from './pages/Contact-Page.vue';
import HomePage from './pages/HomePage.vue';
import NewsPage from './pages/NewsPage.vue';
import PricingPage from './pages/PricingPage.vue'
import DocsPage from './pages/DocsPage.vue'
import LoginPage from './pages/LoginPage.vue'
import AdminPage from './pages/AdminPage.vue'
import AdminPanel from './pages/AdminPanel.vue'
import ClientArea from './pages/ClientArea.vue'
import ClientHome from './pages/ClientHome.vue'
import ControlPanel from './pages/ControlPanel.vue'
import ChomePage from './pages/ClientArea/HomePage.vue'
import AllTickets from './pages/ClientArea/AllTickets.vue'
import AddOnPage from './pages/ClientArea/AddOnpage.vue'
import TicketQuery from './pages/ClientArea/TicketQuery.vue'
import OrderPlan from './pages/ClientArea/OrderPlan.vue'
// Component import
import HomeInfo from './components/admin/BaseHome.vue'
import PlanUpdate from './components/admin/PlanUpdate.vue'
import PlansEditor from './components/admin/PlansEdit.vue'
import BaseHomeInfo from './components/admin/HomeInfo.vue'
import CreateAdmin from './components/admin/CreateAdmin.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', redirect: '/home' },
        {path: '/home', component: HomePage},
        {path: '/admin', component: AdminPage},
        {path: '/contact', component: ContactPage},
        {path: '/docs', component: DocsPage},
        {path: '/pricing', component: PricingPage},
        {path: '/news', component: NewsPage},
        { path:'/login',component:LoginPage},
        {path:'/admin-panel',component:AdminPanel, meta : {requiresLogin : true},
        children :[
            {path: 'home',component:BaseHomeInfo},
            {path: 'add-plans',component:PlanUpdate},
            {path: 'Plans-update',component:PlansEditor},
            {path: 'Main-page',component:HomeInfo},
            {path: 'create-admin',component:CreateAdmin},
        ]
        },
       {path:'/client-area',component:ClientArea,meta : {requireLogin : true},
        children: [
            {path:'support',component:ClientHome,children:[
                {path:'home',component:ChomePage},
                {path:'tickets',component:AllTickets},
                {path:'sumbit-ticket',component:TicketQuery},
                {path:'order',component:OrderPlan},
                {path:'add-on',component:AddOnPage}
            ]},
            {path:'cp',component:ControlPanel}
        ]
    
    
    }
        
    ]
})

export default router