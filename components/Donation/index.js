import React from 'react'
import style from "./donation_.module.scss"

import Form from '../Form'

const Donation = () => {

    return (
        <div className={style.donation}>
            <div className={style.form}>
                <Form />
            </div>
            <div className={style.image}>

            </div>
        </div>
    )
}

export default Donation