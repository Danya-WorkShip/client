import classes from './PreviewImages.module.scss'
import PreviewImage from './PreviewImage/PreviewImage';
import preview1 from "../../../../images/10.png";
import preview2 from "../../../../images/Снимок экрана 2022-10-12 223228.png";
import preview3 from "../../../../images/11.png";
import { FC } from 'react';

const PreviewImages = () => {
  return (
    <div className={classes.PreviewImages}>
        <div className={classes.leftBlur}></div>
        <div className={classes.Images}>
            <PreviewImage src = {preview1}/>
            <PreviewImage isActive={true} src = {preview2}/>
            <PreviewImage src = {preview3}/>
        </div>
        <div className={classes.rightBlur}></div>
    </div>
  )
}

export default PreviewImages