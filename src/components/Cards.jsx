import React from 'react';
import '../styles/Cards/cards.css'
import data from '../data/data.json'

function Cards () {
    const cards = data.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.cover} alt={product.title} className="card__cover"></img>
            <h2 className="card__title">{product.title}</h2>
        </div>
    ))

    return <div className="container">{cards}</div>

}

export default Cards;