import React from 'react'
import {Route,Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import ProductsPage from '../pages/ProductsPage'
import AdminPage from '../pages/AdminPage'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import ErrorPage from '../pages/ErrorPage'


const Page = () => {
    return (
        <div>
            <Switch>

                <Route exact path="/" component={HomePage} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route component={ErrorPage} />

            </Switch>
        </div>
    )
}

export default Page