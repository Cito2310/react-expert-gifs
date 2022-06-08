import React from 'react'

export const GifGridItem = ({title , id , gifVideo}) => {
    return ( //HTML
        <div className='card animate__animated animate__fadeIn'>
            <img src={gifVideo} alt={title}></img>
            <p>{title}</p>
        </div>
    )
    }
