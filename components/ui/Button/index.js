import React from 'react'
import style from './button_.module.scss'

import cn from 'classnames'

const Button = (props) => {
    const {color, buttonFunction, text, width} = props;

    const buttonClass = cn( {
        [style.button]: true,
        [style.button_color_white]: color === 'white',
        [style.button_color_orange]: color === 'orange',
        [style.button_color_blue]: color === 'blue',
        [style.button_width_100]: width === '100',
    });

    return (
        <button onClick={buttonFunction} className={buttonClass}>
            {text}
        </button>
    )
}

export default Button