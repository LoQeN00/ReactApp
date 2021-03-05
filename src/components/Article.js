import React from 'react'

const Article = ({text,author,title}) => {
    return (
        <article className='single-article'>
            <h3>{title}</h3>
            <span>Autor: {author}</span>
            <p>{text}</p>
        </article>
    )
}

export default Article
