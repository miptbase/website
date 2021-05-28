import React from 'react'
import style from "./header_.module.scss"

const Header = (props) => {
    const {logo} = props;
    return (
        <section className={style.header}>
            <a href="/" className={style.logo}>
                <img src={logo} alt='logo' />
            </a>

        </section>
    )
}

export default Header