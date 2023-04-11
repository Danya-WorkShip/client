import React, { FC } from 'react'
import classes from './PreviewImage.module.scss'

interface IPreviewImage {
  isActive?: boolean
  src: string
}

const PreviewImage: FC<IPreviewImage> = ({isActive, src}) => {
  return (
    <div className={(isActive && classes.PreviewImage + ' ' + classes.active) || classes.PreviewImage}>
      <img src={src} alt="" />
    </div>
  )
}

export default PreviewImage