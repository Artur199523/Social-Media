import {connect} from "react-redux"
import {useSelector, useDispatch} from 'react-redux'
import {setUpdateInput, LoginSetError, updateLogin, updatePassword, UploadMyPhoto} from "../../redux/actions/auth"
import AuthLayout from "../HOC/AuthLayout"
import './settings.css'

function Settings(props) {

    const form = useSelector(state => state.auth.login.newform)
    const error = useSelector(state => state.auth.login.error)
    const dispatch = useDispatch()
    const updateL = () => {
        if (!form.login) {
            dispatch(LoginSetError("Fill in the fields"))
        } else {
            dispatch(updateLogin(form.login, props.history))
        }
    }
    const updateP = () => {
        if (!form.password) {
            dispatch(LoginSetError("Fill in the fields"))
        } else {
            dispatch(updatePassword(form.password, props.history))
        }
    };
    const uploadPicture = (e) => {
        e.preventDefault()
        console.log(e.target.querySelector("input").files[0])
        dispatch(UploadMyPhoto(e.target.querySelector("input").files[0],props.history))
    }
    return (<AuthLayout>
        <div className="settings-back">
            <h1>Settings</h1>
            <div>
                <p className="text-white">{error}</p>
                <input
                    className="set-input"
                    placeholder="New Login"
                    value={form.login}
                    onChange={(e) => dispatch(setUpdateInput("login", e.target.value))}
                />
                <button className="up-btn" onClick={() => updateL()}>Update Login</button>
            </div>
            <div>
                <input
                    className="set-input"
                    placeholder="New Password"
                    value={form.password}
                    onChange={(e) => dispatch(setUpdateInput("password", e.target.value))}
                />
                <button className="up-btn" onClick={() => updateP()}>Update Password</button>
            </div>
            <div>
                <form onSubmit={uploadPicture}>
                    <input type="file"/>
                    <button>Save</button>
                </form>
            </div>
        </div>

    </AuthLayout>)
}

export default connect(r => r)(Settings)