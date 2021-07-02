import React from 'react'
import style from "./header_.module.scss"
import Button from "../ui/Button";
import Menu from "../Menu";

const Header = (props) => {
    const {header, menu} = props;
    return (
        <section className={style.header}>
            <div className={style.inner}>
                <a href="/" className={style.logo}>
                    <img src={header.logo} alt='logo' />
                </a>
                <div className={style.menu}>
                    <Menu menu={menu} />
                </div>
                <div className={style['button-container']}>
                    <Button
                        color='white'
                        text={header.button}
                        padding='1.6rem'
                    />
                </div>
            </div>
        </section>
    )
}

export default Header