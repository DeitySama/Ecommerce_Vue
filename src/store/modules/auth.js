import axios from 'axios';
import api_end from '../../envars';
const state={
    auth:false,
    userId:'',
    curr:'',
}
const getters={
    user:state=>state.curr,
}

const actions={
    async authenticate({commit},cred){
    const res = await axios.post(`${api_end}/users/login`,cred);
        commit('login',res.data);
    },
    async getCurrent({commit}){
        const res = await axios.post(`${api_end}/users/curr`,{},{headers:{'authorization':`Bearer ${this.userId}`}});
        commit('persist',res.data);
    }
}

const mutations={
    login:(state,cred)=>{state.auth = true; state.userId=cred._id},
    persist:(state,user)=>{state.curr=user}
}


export default {
    state,
    getters,
    actions,
    mutations
}