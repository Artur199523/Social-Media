import { connect, useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { addUser, SetError, setSignUpInput } from '../../redux/actions/auth'
import {Link} from 'react-router-dom'
import './signup.css'
function Signup(props) {
    // console.log(props)
    const  error = useSelector(state => state.auth.signup.error)
    const form = useSelector(state => state.auth.signup.form)
    const dispatch = useDispatch()
    const signUp =()=> {
        if(!form.name || !form.surname || !form.login || !form.password){
            dispatch(SetError("Fill in all the fields"))
        }else if(!Number(form.password) || form.password.length < 8){
            dispatch(SetError("The password should contain only a number or be less than 8 symbols"))
        }else{
            dispatch(addUser(form,props.history))
        }
    }
   


    return (
        <div className="bg-img">
        
            <div className="form-container"> 
            <div>
            <div className="logo-container">
                <div className="back-link"><button><Link className="link" to="/"><span>&#60;</span>Back to preview</Link></button></div>
                <div className="logo"></div>
                <div className="sign-btn"></div>
            </div>
                <div className=" inp-form">
                <p className="text-white">{error}</p> 
                    <div className="form-group">
                        
                    <input className="name"
                               placeholder="Name"
                               value = {form.name}
                               onChange={(e)=>dispatch(setSignUpInput("name",e.target.value))}
                           
                        />
                    </div>
                    <div className="form-group">
                        <input 
                               placeholder="Surname"
                               value = {form.surname}
                               onChange={(e)=>dispatch(setSignUpInput("surname",e.target.value))}
                        />
                    </div>
                    <div className="form-group">
                        <input  
                               placeholder="Login"
                               value = {form.login}
                               onChange={(e)=>dispatch(setSignUpInput("login",e.target.value))}
                        />
                    </div>
                    <div className="form-group">
                        
                        <input 
                               placeholder="Password"
                               value = {form.password}
                               onChange={(e)=>dispatch(setSignUpInput("password",e.target.value))}
                        />
                    </div>
                    <div className="text-center">
                        <button className="signUp-btn"
                            
                            onClick={()=>{signUp()}}
                        >Sign Up
                        </button>
                    </div>
                </div>
                </div>
            </div>        
        </div>
    )
}

export default connect(r=>r)(Signup)