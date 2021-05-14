import React from 'react'
import style from './value_.module.scss'

import cn from 'classnames'

const Value = (props) => {
    const {value, mod, functionValueActive, isSelected} = props;

    const valueClass = cn( {
        [style.value]: true,
        [style.value_color_select]: mod === 'select',
        [style.value_color_select_active]: isSelected === true
    });

    return (
        <div className={valueClass}  onClick={functionValueActive}>
            <div className={style.hidden}> {value}</div>
            <div className={style.text}>{value}</div>

        </div>
    )
}

export default Value