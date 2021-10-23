import axios from 'axios'

const url = 'http://localhost:5000/';

export function setTextareaInput(text) {
    return {
        type: "posting",
        text
    }
}

export function MyPost(file, text) {
    let form = new FormData()
    form.append("avatar", file)
    form.append("token", sessionStorage.user)
    form.append("text", text)
    return function (dispatch) {
        axios.post(url + "addPost", form)
            .then(r => {
                console.log(r.data)
            })
    }

}

export function GetMyPosts() {
    return function (dispatch) {
        axios.post(url + "getMyPosts", {token: sessionStorage.user})
            .then(r => {
                dispatch(ShowMyPosts(r.data))
            })
    }
}

function ShowMyPosts(post) {
    return {
        type:"showMyPosts",
        post
    }
}

export function RemoveMyPost(post_id,post){
    return function (dispatch) {
        axios.post(url + "removePost",{post_id,token: sessionStorage.user})
            .then(r=>{
                dispatch(Remove(post))
            })
    }
}
function Remove(post) {
    return{
        type:"removePost",
        post
    }

}

export function LikePost(post_id){
   return function (dispatch){
       axios.post(url + "like",{token: sessionStorage.user,post_id})
           .then(r=>{
               console.log(r.data)
           })
   }
}

export function  GetMyFriendPost() {
    return function (dispatch){
        axios.post(url + "getFriendsPosts",{token: sessionStorage.user})
            .then(r=>{
                dispatch(ShowMyFriendPost(r.data))
            })
    }
}

function  ShowMyFriendPost(posts) {
    return{
        type:"myFriendPost",
        posts

    }

}