import axios from 'axios';
import api_end from '../../envars';
const state ={
    products:[],
    nextPage:0,
    previousPage:0,
    limit:5
}

const getters ={
    allProducts: state => { return state.products},
}

const actions = {
    async fetchProducts({commit}){
        const response = await axios.get(`${api_end}/products?limit=${state.limit}`);
        console.log(response);
        commit('setProducts',response.data);
    },
    async changePage({commit},query){
        let response;
        if(query == 'prev'){
            response = await axios.get(`${api_end}/products?limit=${state.limit}&page=${state.previousPage}`);
        }
        if(query == 'next'){
            response = await axios.get(`${api_end}/products?limit=${state.limit}&page=${state.nextPage}`);
        }
        console.log(response);
        commit('setProducts',response.data);
    }
}

const mutations ={
    setProducts:(state,res)=>{
        state.products=res.item;   
        
        if(res.pagination.previous){
            state.previousPage = res.pagination.previous.page;
        }

        if(res.pagination.next){
            state.nextPage = res.pagination.next.page;
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}