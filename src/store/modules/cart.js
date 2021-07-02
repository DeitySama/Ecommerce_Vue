//import axios from 'axios';

const state = {
    items:[],
    total:0,
    count: 0

};
const getters ={
    allItems:(state)=>{ return state.items},
    getCount:(state)=>{ return state.count},
    getTotal:(state)=>{ return state.total}
};
const actions ={
    async addToCart({commit}, item){
        commit('newItem',item);
    }
};
const mutations ={
    newItem:(state,item)=>{     
        console.log(item);

        var contains = containsObject(item,state.items);
        if(!contains){
            state.items.unshift(item);
            state.count = state.items.length;
        } else{
            state.items.find(sitem=>{if(sitem.product._id == item.product._id){
                sitem.quantity = item.quantity
            }})
        }

        if(state.items.length>0){
            var total = state.items.reduce((total,sitem)=>{return (total+(sitem.product.price*sitem.quantity))},0).toFixed(2);
        }
       state.total = total;
    }
};


function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].product._id === obj.product._id) {
            return true;
        }
    }

    return false;
}

export default {
    state,
    getters,
    actions,
    mutations
};