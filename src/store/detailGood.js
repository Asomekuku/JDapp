import {fetchGoodList} from '@/utils/api.js'
export default{
    namespaced:true,
    state:{
        shop:[]
    },
    mutations:{
        goodData(state,data){
            state.shop=data
        }
    },
    actions:{
        goods(store,params){
            fetchGoodList({params}).then(res=>{
                store.commit('goodData',res)
              })
        }
    }
}