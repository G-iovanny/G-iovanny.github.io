import React from 'react';
import '../styles/Banner/banner.css'

function Banner({ titre, source, textAlt }) {
    return (
        <div className="banner">
            <h2 className="banner__title">{ titre }</h2>
            <img src={ source } alt={ textAlt } className="banner__img"></img>
        </div>
    )
}

export default Banner;