import {connect, useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {LoginSetError, setSigninInput, SignInUser} from '../../redux/actions/auth'
import './login.css'

function Login(props) {
    // console.log(props)
    const error = useSelector(state => state.auth.login.error)
    const form = useSelector(state => state.auth.login.form)
    const dispatch = useDispatch()
    const signIn = () => {
        if (!form.login || !form.password) {
            dispatch(LoginSetError("Fill in all the fields"))
        } else {
            dispatch(SignInUser(form, props.history))
            form.login = "";
            form.password = "";
        }
    };


    return (
        <div className="bg-img">
            <div className="form-container">
                <div className="logo-container">
                    <div className="back-link"/>
                    <div className="logo-login"/>
                    <div className="sign-btn"><Link className="link" to="/signup">
                        <button>Sign Up</button>
                    </Link></div>
                </div>
                <div className="inp-form">

                    <p className="text-white">{error}</p>
                    <div className="form-group">
                        <input
                            placeholder="Login"
                            value={form.login}
                            onChange={(e) => dispatch(setSigninInput("login", e.target.value))}
                        />
                    </div>
                    <div className="form-group">

                        <input
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={(e) => dispatch(setSigninInput("password", e.target.value))}
                        />
                    </div>
                    <div className="text-center">
                        <button className="login-btn"
                                onClick={() => signIn()}
                        >Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(r => r)(Login)