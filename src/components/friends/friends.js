import { useEffect } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { getMyFriends, RemoveFriend } from "../../redux/actions/friends"
import AuthLayout from '../HOC/AuthLayout'
import "./friend.css"

function Friends(){
    const dispatch = useDispatch()
const friends = useSelector(state=> state.friends.result)
const Remove = (friendId,friend) =>{
        dispatch(RemoveFriend(friendId,friend))
}
    useEffect(()=>{
        dispatch(getMyFriends())
    },[])
    return(
        <AuthLayout>
            <h1>FRIENDS</h1>
            <div className="friend-container">

                {friends.length>=1
                    ?friends.map((elm,i)=>{

                            return (
                                <div key={i} className="user-container">
                                    <div>
                                        {elm.photo
                                            ? <img className="avatar-img"
                                                   src={`http://localhost:5000/photos/${elm.photo}`}/>
                                            : <img className="avatar-img"
                                                   src="http://simpleicon.com/wp-content/uploads/user1.png"/>
                                        }
                                    </div>
                                    <div className="user-name">{elm.name} {elm.surname}</div>
                                    <button className="friend-button" onClick={() => Remove(elm.id, elm)}>Remove</button>
                                </div>

                            )

                    })
                    :<div className="friend-info"><h2 >You have no friends</h2></div>
                }
            </div>
        </AuthLayout> 
    )
}
export default connect(r=>r)(Friends)