import {Link} from 'react-router-dom'
import './authLayout.css'

function AuthLayout(props) {
    return (
        <div>
            <div className="menu">
                <ul className="menu-container">
                    <li><Link to="/profile">
                        <div className="logo-authLayout"/>
                    </Link></li>
                    <li><Link to="/friends">Friends</Link></li>
                    <li><Link to="/requests">Requests</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
            <div>{props.children}</div>
        </div>
    )
}

export default AuthLayout