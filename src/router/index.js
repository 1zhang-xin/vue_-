// import { from } from 'core-js/core/array'
import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../components/Shouye.vue'


Vue.use(VueRouter)

const routes = [
 { path:'/login', component:()=>import('../components/Login.vue')},
//  重定向
{path:'/',redirect:'/login'},

{path:'/loginshouye',
component:shouye
}
]



const router = new VueRouter({
  routes
})


router.beforeEach((to,from,next)=>{
      if(to.path==='/login'){
    return    next()
      }
      const tokent=window.sessionStorage.getItem('token')
        if(!tokent){
          next('/login')
        }else{
          next()
        }
          
        
    
       
      
          
})

export default router
