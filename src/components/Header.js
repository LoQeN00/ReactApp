import React from 'react'
import {Route,Switch} from 'react-router-dom'

import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpg'

import "../styles/Header.css"


const Header = () => {
    return (
        <header>
            <Switch>
                <Route exact path="/" render={()=> <img src={img1} alt='auto' />} />
                <Route exact path="/products" render={()=> <img src={img2} alt='auto' />} />
                <Route exact path="/contact" render={()=> <img src={img3} alt='auto' />} />
                <Route exact path="/admin" render={()=> <img src={img1} alt='auto' />} />
                <Route render={()=> <img src={img2} alt='auto' />} />
            </Switch>
        </header>
    )
}

export default Header
