import React from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const {data:images , loading} = useFetchGifs(category);

  return ( //HTML
    <>
      <h3>{category}</h3>

      { loading ? <p>Loading</p> : null}

      <div className='card-grid animate__animated animate__fadeIn'>
        {images.map( img => <GifGridItem key={img.id} {...img}/>)}
      </div>
    </>
  )
}
