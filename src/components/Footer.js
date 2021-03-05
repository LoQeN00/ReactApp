import React from 'react'
import { Route } from 'react-router-dom'




const Footer = () => {
    return (
       <footer>
           <div>
               <Route path="/" exact render={(props)=> {
                   console.log(props)
                   return <h2>Jestes na stronie głównej</h2>
               }} /></div>
            
               <Route path="/:page" exact render={(props)=> {
                   const messages = [`Jesteś na  ${props.match.params.page}`,`Jesteś na ${props.match.path}`,`Jesteś na ${props.match.url}`]
                   const messagesList = messages.map(item => <p>{item}</p>)
                   return (
                       <>
                        {messagesList}
                       </>
                   )
               }}/>


               
       </footer>
    )
}

export default Footer