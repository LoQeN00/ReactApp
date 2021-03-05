import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const loggedIn = true

const AdminPage = () => {
    return (
        <Route>
            {!loggedIn ? <Redirect to="/login" /> : <h1>Panel admina siema</h1>}
        </Route>
    )
}

export default AdminPage