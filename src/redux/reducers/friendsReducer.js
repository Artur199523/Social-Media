import friends from "../state/friends";
function FriendsReducer(state = friends, action){
    let temp={...state};
    switch(action.type){
       case "AddMyfriend":
       temp.result = action.friends;
       break;
       case "remove":
        temp.result.splice(temp.result.indexOf(action.friend),1);
           
       break
    }
    return temp
}
export default FriendsReducer