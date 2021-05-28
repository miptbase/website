import React from 'react'
import style from "./menu_.module.scss"

const Menu = (props) => {
    const {logo} = props;
    return (
        <section className={style.header}>
            <a href="/" className={style.logo}>
                <img src={logo} alt='logo' />
            </a>

        </section>
    )
}

export default Menu