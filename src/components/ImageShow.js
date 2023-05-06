import React from 'react'
import './ImageShow.css'

const ImageShow = ({image}) => {
  const { urls, alt_description} = image
  return (
    <img src = {urls.full} alt = {alt_description}></img>
  )
}

export default ImageShow