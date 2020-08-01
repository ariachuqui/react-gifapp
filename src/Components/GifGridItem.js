import React from 'react'

const GifGridItem = ({imagen, title}) =>
        <div className="gif">
            <p>{title}</p>
            <img src={ imagen } alt={ title }/>
        </div>;


export default GifGridItem
