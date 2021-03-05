import React from 'react'
import Article from '../components/Article'

const articles = [
    {
        id:1,
        author: "Twój Stary po 3 piwach na przecenie z biedronki",
        title: "Jak szybko zapierdala Prosche",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,corrupti ex! Sapiente optio, qui necessitatibus impedit fugit explicabo,debitis, nam quam praesentium cumque quidem repellendus atque numquam distinctio.Quis, exercitationem?"
    },
    {
        id:2,
        author: "Mateusz Kozłowksi",
        title: "Opis silnika Porsche",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,corrupti ex! Sapiente optio, qui necessitatibus impedit fugit explicabo,debitis, nam quam praesentium cumque quidem repellendus atque numquam distinctio.Quis, exercitationem?"
    },
    {
        id:3,
        author: "Kuba Bienia",
        title: "Jak sie do chuja redukuje biegi",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,corrupti ex! Sapiente optio, qui necessitatibus impedit fugit explicabo,debitis, nam quam praesentium cumque quidem repellendus atque numquam distinctio.Quis, exercitationem?"
    }
]

const HomePage = () => {
    
    const articleList = articles.map(item => (
        <Article key={item.id} author={item.author} title={item.title} text={item.text} />
    ))
    
    return (
        <div>
            Strona Startowa
            {articleList}
        </div>
    )
}

export default HomePage
