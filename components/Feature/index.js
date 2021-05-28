import React from 'react'
import style from "./feature_.module.scss"

import Form from '../Form'

const Feature = (props) => {
    const {title, text, img} = props;
    return (
        <div className={style.feature}>
            <div className={style.img}>
                <img src={img} alt={title}/>
            </div>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.text}>
                {text}
            </div>
        </div>
    )
}

export default Feature