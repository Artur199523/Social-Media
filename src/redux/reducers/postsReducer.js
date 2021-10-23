import posts from "../state/posts";

function PostsReducer(state = posts, action) {
    let temp = {...state}
    switch (action.type) {
        case "posting":
            temp.text = action.text
            break
        case "showMyPosts":
            temp.result = action.post
            break
        case "removePost":
            temp.result.splice(temp.result.indexOf(action.post),1)
            break
        case "myFriendPost":
            temp.friend_result = action.posts

            break


    }
    return temp
}

export default PostsReducer