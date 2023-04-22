import React from 'react';
import '../styles/Cards/cards.css'
import { Link } from 'react-router-dom'


function Cards ({ product }) {
     return (
        <Link to={ `/product/${ product.id }` } className="card__link">
            <article className="card">
                <img src={product.cover} className="card__cover" alt={product.title}></img>
                <h2 className="card__title">{product.title}</h2>
            </article>
        </Link> 
    )
}


export default Cards;