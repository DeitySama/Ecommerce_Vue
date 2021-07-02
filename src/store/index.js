import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import auth from './modules/auth';
import product from './modules/product'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        cart,
        auth,
        product
    }
})