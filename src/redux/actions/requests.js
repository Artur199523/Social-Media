import axios from 'axios'
const  url = 'http://localhost:5000/'


export function getRequests(){
    return function(dispatch){
        axios.post(url + "getMyRequests", {token:sessionStorage.user})
             .then(r=>{
                dispatch(MyRequests(r.data))
             })
            }

}

export function AcceptRequest(id,user){
    return function(dispatch){
        axios.post(url + 'acceptRequest', {token:sessionStorage.user,id:id})
        .then(r=>{
            dispatch(MyFriend(id,user))
        })
       
    }

}
export function DeclineRequest(id,user){
    return function(dispatch){
        axios.post(url + 'declineRequest',{token:sessionStorage.user,id:id})
        .then(r=>{
            dispatch(IsntMyFriend(id,user))
        })
    }
}
export function IsntMyFriend(id,friend){
    return{
        type:"IsntMyFriend",
        friend
    }
}

export function MyFriend(id,friend){
    return{
        type:"MyFriend",
        friend
    }
}
export function MyRequests(users){
    return{
        type:"myRequests",
        users
    }
}