import React from 'react';
import '../styles/Cards/cards.css'
/* import { Link } from 'react-router-dom' */


function Cards ({ product }) {
     return (

        <article className="card">
            <a href="test" className="card__link">
                <img src={product.cover} className="card__cover" alt={product.title}></img>
                <h2 className="card__title">{product.title}</h2>
            </a>
        </article>  

    )
}


export default Cards;