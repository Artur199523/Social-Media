import {BrowserRouter, Route} from 'react-router-dom';
import friends from './components/friends/friends';
import Login from './components/login/login';
import Profile from './components/profile/profile';
import Requests from './components/Requests/Requests';
import settings from './components/settings/settings';
import Signup from './components/signup/signup';
import MyPosts from "./components/myPosts/MyPosts";


function Routes () {
    return <BrowserRouter>        
        <Route path="/" component={Login} exact/>
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile}/>
        <Route path="/settings" component={settings}/>
        <Route path="/requests" component={Requests}/>
        <Route path="/friends" component={friends}/>
        <Route path="/myPost" component={MyPosts}/>
    </BrowserRouter>
}

export default Routes;