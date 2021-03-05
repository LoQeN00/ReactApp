import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/ProductsPage.css'

const products = ["car","bike","motorcycle"]

const ProductsPage = () => {

    const list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))


    return (
        <div className='products'>
            <h2>Lista</h2>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default ProductsPage