import requests from "../state/requests";
function RequestsReducer(state = requests, action ){
    // state=search,action
    let temp={...state}
    switch(action.type){
        case "myRequests":
            temp.result = action.users.users;
        break;
        case "MyFriend":
             temp.result.splice(temp.result.indexOf(action.friend),1);
        break;
        case "IsntMyFriend":
            temp.result.splice(temp.result.indexOf(action.friend),1);
            break
    }
    return temp
}
export default RequestsReducer