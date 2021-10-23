import {connect, useSelector} from "react-redux";
import {useDispatch} from "react-redux"
import './myPosts.css'
import AuthLayout from "../HOC/AuthLayout";
import React, {useEffect} from "react";
import {getUserBy} from "../../redux/actions/auth";
import {GetMyFriendPost, GetMyPosts, LikePost, RemoveMyPost} from "../../redux/actions/posts";


function MyPosts() {
    const acc = useSelector(state => state.auth.user);
    const post = useSelector(state=>state.posts.result);
    console.log(post)
    const dispatch = useDispatch()
    const  Remove = (post)=>{
        dispatch(RemoveMyPost(post.id,post))
    }
    const Like =(id)=>{
        dispatch(LikePost(id))
    }
    useEffect(() => {
        dispatch(getUserBy());
        dispatch(GetMyPosts())

    }, []);
    return (
        <AuthLayout>
            <div className="my-post-container">
                        <div className="img-container">
                            {acc.photo
                                ? <img src={`http://localhost:5000/photos/${acc.photo}`} className="profile-img"/>
                                : <img src="http://simpleicon.com/wp-content/uploads/user1.png" className="profile-img"/>
                            }
                            <h1>{acc.name} {acc.surname}</h1>

                        </div>
                <div className="my-posts-show-container">
                    {
                        post.map((elm,i)=>{
                            return(
                                <div className="my-post" key={i}>
                                    <p className="post-text">{elm.text}</p>
                                    <img className="post-photo" src={`http://localhost:5000/photos/${elm.photo}`}/>
                                    <div className="post-btn-container">
                                        <button className="post-btn" onClick={()=>Remove(elm)}>Remove</button>
                                        <button className="post-btn" onClick={()=>Like(elm.id)}>Like</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </AuthLayout>
    )
}

export default connect(r => r)(MyPosts)