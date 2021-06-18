import React from 'react'
import style from "./inner-page_.module.scss"


const InnerPage = (props) => {
    const {title, children} = props;
    return (
        <div className={style.innerPage}>
            <h1 className={style.title}>
                {title}
            </h1>
            <div className={style.article}>
                {children}
            </div>
        </div>
    )
}

export default InnerPage