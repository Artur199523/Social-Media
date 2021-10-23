import search from "../state/search";

function SearchReducer(state = search, action) {
    // state=search,action
    let temp = {...state};
    switch (action.type) {

        case "updateSearchInp":
            temp.text = action.text;
            break;
        case "addUsers":
            temp.result = action.users;
            break;
        case "requestDone":
            let userS = temp.result.find(a => a.id === action.id);
            userS.isRequestSent = true;
            break;
        case "requestFall":
            let user = temp.result.find(a => a.id === action.id);
            user.isRequestSent = false;
            break
    }
    return temp
}

export default SearchReducer
