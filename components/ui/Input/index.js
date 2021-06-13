import React from 'react'
import style from './input_.module.scss'

import cn from 'classnames'

const Input = React.forwardRef((props, ref) => {
    const {color, placeholder, value, readonly, mod, functionClick, isSelected, name, type, onChange, onClick, onInput,onFocus,onBlur, id} = props;

    const inputClass = cn( {
        [style.input]: true,
        [style.input_color_white]: color === 'white',
        [style.input_color_select]: mod === 'select',
        [style.input_color_select_active]: isSelected === true
    });

    return (
        <input
            id={id}
            className={inputClass}
            placeholder={placeholder}
            readOnly={readonly}
            name={name}
            onInput={onInput}
            onChange={onChange}
            ref={ref}
            type={type}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    )
});

export default Input