import Landing from '../src/components/Landing';
import Shop from '../src/components/Shop';
import ProductPreview from '../src/components/Body/ProductPreview'
import Login from '../src/components/Auth/Login'

export default [
    {path:"/",component:Landing},
    {path:"/shop",component:Shop},
    {path:"/preview/:id",component:ProductPreview,name:'Preview'},
    {path:"/login",component:Login, name:'Login'}
]