import axios from './myaxios'
export function getList(params){
    return axios({
        url:'',
        method:'GET',
        params
    })
}
export function fetchGoodList(params){
    return axios({
        url:'/topics',
        method:'GET',
        params

    })
}

export default {
    getList,
    fetchGoodList
}