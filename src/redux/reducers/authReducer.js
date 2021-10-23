import auth from "../state/auth";

function AuthReducer(state = auth, action) {
    let temp = {...state};

    switch (action.type) {
        case 'setError':
            temp.signup.error = action.msg;
            break;
        case "setSignupInput":
            temp.signup.form[action.key] = action.val;
            break;
        case "setSigninInput":
            temp.login.form[action.key] = action.val;
            break;
        case "LoginSetError":
            temp.login.error = action.msg;
            break;
        case "profilePage":
            temp.user = action.user;
            break;
        case "setUpdateInput":
            temp.login.newform[action.key] = action.val;
            break;

    }
    return temp
}

export default AuthReducer