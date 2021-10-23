import axios from 'axios'
const  url = 'http://localhost:5000/'

export function getMyFriends(){
    return function(dispatch){
        axios.post(url + "getMyFriends",{token:sessionStorage.user})
        .then(r=>{
            dispatch(AddMyfriend(r.data.users))
        })
    }
}
export function AddMyfriend(friends){
    return{
        type:"AddMyfriend",
        friends
    }

}

export function RemoveFriend(friendId,friend){
    return function(dispatch){
        axios.post(url + "unfriend",{token:sessionStorage.user,id:friendId})
        .then(r=>{
            dispatch(Remove(friend))
        })
    }
}

export function Remove(friend){
    return {
        type:"remove",
        friend
    }
}