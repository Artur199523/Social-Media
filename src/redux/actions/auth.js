import axios from 'axios'

const url = 'http://localhost:5000/'

export function SetError(msg) {
    return {
        type: "setError", msg
    }
}

export function LoginSetError(msg) {
    return {
        type: "LoginSetError", msg
    }
}

export function setSignUpInput(key, val) {
    return {
        type: "setSignupInput", key, val
    }
}

export function setUpdateInput(key, val) {
    return {
        type: "setUpdateInput", key, val
    }
}

export function setSigninInput(key, val) {
    return {
        type: "setSigninInput", key, val
    }
}

export function profilePage(user) {
    return {
        type: "profilePage", user
    }
}

export function setFileInput(val) {
    return {
        type: "setFileInput",
        val
    }
}

export function addUser(user, history) {
    return function (dispatch) {
        axios.post(url + "signup", user)
            .then(r => {
                if ("error" in r.data) {
                    dispatch(SetError(r.data.error))
                } else {
                    for (let key in user) {
                        user[key] = ""
                    }
                    dispatch(SetError(""))
                    history.push("/")
                }
            })
    }
}

export function SignInUser(login, history) {
    return function (dispatch) {
        axios.post(url + "login", login)
            .then(r => {
                if ("error" in r.data) {
                    dispatch(LoginSetError(r.data.error))
                } else {
                    sessionStorage.user = r.data.token
                    history.push("/profile")
                    history.action = "profilePage"

                }
            })
    }
}

export function getUserBy() {
    return function (dispatch) {
        axios.post(url + "getUserByToken", {token: sessionStorage.user})
            .then(r => {
                sessionStorage.user = r.data.token
                dispatch(profilePage(r.data))
            })
    }

}

export function updateLogin(newLogin, history) {
    return function (dispatch) {
        axios.post(url + "updateLogin", {token: sessionStorage.user, text: newLogin})
            .then(r => {
                // if("error" in r.data){
                //     dispatch(LoginSetError(r.data.error))
                // }
                console.log(r.data)
            })

    }

}

export function updatePassword(newPassword) {
    return function (dispatch) {
        axios.post(url + "updatePassword", {token: sessionStorage.user, text: newPassword})
            .then(r => {
                console.log(r.data)
            })
    }
}

export  function UploadMyPhoto(file, history) {

    let form = new FormData()
    form.append("avatar", file)
    form.append("token", sessionStorage.user)

    return function (dispatch){
        axios.post(url + 'uploadPic',form)
            .then(r=>{
                history.push("/profile")
            })
    }

}





