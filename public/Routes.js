import Landing from '../src/components/Landing';
import Shop from '../src/components/Shop';
import ProductPreview from '../src/components/Body/ProductPreview'
import Login from '../src/components/Auth/Login'
import Register from '../src/components/Auth/Register'
import store from '@/store';

export default [
    {path:"/",component:Landing},
    {path:"/shop",component:Shop,name:'Shop'},
    {path:"/preview/:id",component:ProductPreview,name:'Preview'},
    {
        path:"/login",
        component:Login,
        name:'Login',
        beforeEnter:(to,from,next)=>{
            if(store.getters['user']){
                 next({name:'Shop' })
            
            }
            next()
        }
},
    {path:"/register",component:Register, name:'Register'}
]