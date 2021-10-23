import {connect, useSelector} from "react-redux";
import { useDispatch } from "react-redux"
import {GetMyPosts, LikePost, MyPost, RemoveMyPost, setTextareaInput} from "../../redux/actions/posts";
import React from "react";
import "./post.css"


function Posts() {
    const post = useSelector(state=>state.posts);
    const account = useSelector(state => state.auth.user);
    const Post = (e)=>{
        e.preventDefault();
        dispatch(MyPost(e.target.querySelector("input").files[0],post.text));
        //dispatch(GetMyPosts())

        e.target.querySelector("input").value = "";
        e.target.querySelector("textarea").value = ""

    };

    const  Remove = (post)=>{
        dispatch(RemoveMyPost(post.id,post))
    }
    const Like =(id)=>{
        dispatch(LikePost(id))
    }
    const dispatch = useDispatch()
    return (
        <div className="posts-container">
            <form onSubmit={Post}>
                <textarea
                    placeholder={`What do you think,${account.name}?`}
                       value={post.text}
                       onChange={(e)=>dispatch(setTextareaInput(e.target.value))}
                />
                <input type="file"/>
                <button className="post-add-btn">Post</button>
            </form>
            {/*<div className="posts-show-container">*/}
            {/*    {*/}
            {/*        post.result.map((elm,i)=>{*/}
            {/*            return(*/}
            {/*                <div className="my-post" key={i}>*/}
            {/*                    <p className="post-text">{elm.text}</p>*/}
            {/*                    <img className="post-photo" src={`http://localhost:5000/photos/${elm.photo}`}/>*/}
            {/*                    <div className="post-btn-container">*/}
            {/*                        <button className="post-btn" onClick={()=>Remove(elm)}>Remove</button>*/}
            {/*                        <button className="post-btn" onClick={()=>Like(elm.id)}>Like</button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
}
export default connect(r=>r)(Posts)