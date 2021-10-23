import axios from 'axios'
const  url = 'http://localhost:5000/'


export function updateSearchInp(text){
    return {
        type:"updateSearchInp",
        text
    }
}

export function searchFor(text,user){
    return function(dispatch){
axios.post(url + "search",{token:sessionStorage.user,text:text})
.then(r=>{
    dispatch(add(r.data.users))
    
})
    }
    
}
export function SentRequest(id){
    return function(dispatch){
        axios.post(url + "addFriend",{token:sessionStorage.user,id:id})
        .then(r=>{
            dispatch(SendRequest(id))
            
        })
    }
    
}
export function SendRequest(id){
    return{
        type:"requestDone",
        id
    }
}
export function DeleteRequest(id){
    return{
        type:"requestFall",
        id
    }
}
export function DeleteRequset(id){
    return function(dispatch){
        axios.post(url + "cancelRequest",{token:sessionStorage.user,id:id})
        .then(r=>{
            dispatch(DeleteRequest(id))
        })
    }
}
function add(users){
    return{
        type:"addUsers",
        users
    }
}
export function setUsersData(data){
    return {
        type:"setUsersData",
        data
    }
}