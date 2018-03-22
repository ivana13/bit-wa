import React from 'react';

const ShowItem = (show) => {
    const { name, image } = show

    return (
        <li>
            <img src={image} class="img-fluid" alt="Responsive image"/>
            <span className="title">{name}</span>
        </li>
    )
}

export {ShowItem}