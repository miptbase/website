import React from 'react'
import style from './check_.module.scss'

import cn from 'classnames'

const Check = (props) => {
    const {color, text, id, functionCheck, isSelected, name} = props;

    const labelClass = cn({
        [style.label]: true,
        [style.label_color_white]: color === 'white',
        [style.label_color_selected]: isSelected === true
    });

    return (
        <>
            <input className={style.input} type='checkbox' id={id} name={name}/>
            <label className={labelClass} onClick={functionCheck} htmlFor={id}>  {text} </label>
        </>

    )
}

export default Check