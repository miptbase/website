import React from 'react'
import style from './button_.module.scss'

import cn from 'classnames'

const Button = (props) => {
    const {color, buttonFunction, text, width, type, padding, children, disabled, height} = props;

    const buttonClass = cn( {
        [style.button]: true,
        [style.button_color_white]: color === 'white',
        [style.button_color_orange]: color === 'orange',
        [style.button_color_blue]: color === 'blue',
        [style.button_color_black]: color === 'black',
        [style.button_width_100]: width === '100',
        [style.disabled]: disabled,
    });

    return (
        <button onClick={buttonFunction} className={buttonClass} type={type} style={{'padding' : `0 ${padding}`, 'height' : {height}}}>
            {text &&  <span className={style.text}>{text}</span>}
            {children}
        </button>
    )
}

export default Button