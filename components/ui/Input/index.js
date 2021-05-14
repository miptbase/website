import React from 'react'
import style from './input_.module.scss'

import cn from 'classnames'

const Input = (props) => {
    const {color, placeholder, value, readonly, mod, functionClick, isSelected} = props;

    const inputClass = cn( {
        [style.input]: true,
        [style.input_color_white]: color === 'white',
        [style.input_color_select]: mod === 'select',
         [style.input_color_select_active]: isSelected === true
    });

    return (
        <input onClick={functionClick}
            className={inputClass}
            placeholder={placeholder}
            value={value}
            readOnly={readonly}
        />
    )
}

export default Input