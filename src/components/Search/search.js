import {useEffect} from "react"
import {connect} from "react-redux"
import {useSelector, useDispatch} from 'react-redux'
import {DeleteRequset, searchFor, SentRequest, updateSearchInp, SendRequest} from "../../redux/actions/search"
import "./search.css"

function Search(props) {

    const search = useSelector(state => state.search.text)
    const users = useSelector(state => state.search.result)
    const dispatch = useDispatch()
    const doSearch = (text) => {
            dispatch(updateSearchInp(text))

            dispatch(searchFor(text, users))


    }
    const SRequest = (id) => {
        dispatch(SentRequest(id))
        // dispatch(SendRequest(users))
    }
    const DRequest = (id) => {
        dispatch(DeleteRequset(id))
    }

    const isRequestSentButton = (isRequestSent, id) => {
        if (!isRequestSent) {
            return <button className="add-button" onClick={() => SRequest(id)}>Add</button>
        } else {
            return <button className="delete-button" onClick={() => DRequest(id)}>Delete</button>
        }
    }


    return (<div>
        <input className="search-input"
               value={search.text}
               onChange={(e) => doSearch(e.target.value)}
        />
        <div>
            {
                users.map((elm, i) => {

                    return (<div key={i} className="s-users">
                        <h5>{elm.name} {elm.surname}</h5>
                        {isRequestSentButton(elm.isRequestSent, elm.id)}
                    </div>)
                })
            }
        </div>
    </div>)
}

export default connect(r => r)(Search)