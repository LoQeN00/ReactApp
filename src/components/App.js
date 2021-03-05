import React, { Component } from 'react'
import '../styles/App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Page from './Page'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className='page'>
              <Page />
            </section>
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App

