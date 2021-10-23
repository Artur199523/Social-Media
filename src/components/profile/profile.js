import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {connect, useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import {getUserBy} from "../../redux/actions/auth"
import AuthLayout from '../HOC/AuthLayout'
import Search from "../Search/search"
import "./profile.css"
import Posts from "../Posts/Posts";
import {GetMyFriendPost, GetMyPosts} from "../../redux/actions/posts";

function Profile(props) {


    const account = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserBy());
        dispatch(GetMyPosts());
        dispatch(GetMyFriendPost())
    }, []);
    return (
        <AuthLayout>
            <div className="profile-container">
                <div className="admin-container">
                    <div className="img-container">
                        {account.photo
                        ?<img src={`http://localhost:5000/photos/${account.photo}`}/>
                        : <img src="http://simpleicon.com/wp-content/uploads/user1.png"/>
                        }
                        <h1><Link to={"/myPost"}>{account.name} {account.surname}</Link></h1></div>
                    </div>

                <div className="posts-container">
                    <Posts/>
                </div>
                <Search></Search>
            </div>
        </AuthLayout>


    )
}

export default connect(r => r)(Profile)