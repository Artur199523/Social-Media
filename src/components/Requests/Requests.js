import {connect, useSelector} from "react-redux"
import AuthLayout from "../HOC/AuthLayout"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {AcceptRequest, DeclineRequest, getRequests} from "../../redux/actions/requests";
import "./requests.css"

function Requests() {
    const dispatch = useDispatch();
    const requests = useSelector(state => state.requests.result)
    const Accept = (id, user) => {
        dispatch(AcceptRequest(id, user))

    };
    const Decline = (id, user) => {
        dispatch(DeclineRequest(id, user))
    };
    useEffect(() => {

        dispatch(getRequests())

    }, []);
    return (
        <AuthLayout>
            <h2>REQUESTS</h2>
            <div className="requests-container">
                {requests.length >=1
                    ?requests.map((elm, i) => {
                        return (
                            <div key={i} className="user-container">
                                    <div>
                                    {elm.photo
                                        ?<img className="avatar-img" src={`http://localhost:5000/photos/${elm.photo}`}/>
                                        : <img className="avatar-img" src="http://simpleicon.com/wp-content/uploads/user1.png"/>
                                    }
                                 </div>
                                <div className="user-name">{elm.name} {elm.surname}</div>
                                <div>
                                    <button className="request-button" onClick={() => Accept(elm.id, elm)}>Accept</button>
                                    <button  className="request-button" onClick={() => Decline(elm.id, elm)}>Decline</button>
                                </div>
                            </div>
                        )
                    })
                    :<div className="requests-info"><h2>You have no request</h2></div>
                }
            </div>
        </AuthLayout>
    )
}

export default connect(r => r)(Requests)