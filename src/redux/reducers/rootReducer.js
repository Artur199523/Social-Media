import {combineReducers} from 'redux'
import AuthReducer from './authReducer'
import SearchReducer from './searchReducer'
import RequestsReducer from './requestReducer'
import FriendsReducer from './friendsReducer'
import PostsReducer from "./postsReducer";



export default combineReducers({
    auth: AuthReducer,
    search:SearchReducer,
    requests:RequestsReducer,
    friends:FriendsReducer,
    posts:PostsReducer,
})