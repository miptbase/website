import React, { useState } from 'react'
import style from "./header_.module.scss"
import Button from "../ui/Button";
import Menu from "../Menu";
import { useMediaQuery } from 'react-responsive'
import cn from "classnames";

const Header = (props) => {
    const isMobile = useMediaQuery(
        { maxWidth: 1024 }
    )
    const [menuOpen, setMenuOpen] = useState(false);
    const {header, menu, scrollToDonation} = props;
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
                        buttonFunction={scrollToDonation}
                    />
                </div>



                <div className={cn({
                    [style['menu-button']]: true,
                    [style['menu-button_open']]: !!menuOpen
                })} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={cn({[style['menu-line']]: true, [style['menu-line_1']]: true, [style['menu-line_1_open']]: !!menuOpen})} />
                    <div className={cn({[style['menu-line']]: true, [style['menu-line_2']]: true, [style['menu-line_2_open']]: !!menuOpen})} />
                </div>


                <div className={cn({
                    [style['menu-mobile']]: true,
                    [style['menu-mobile_open']]: !!menuOpen
                })} >
                    <Menu menu={menu} />
                </div>

            </div>
        </section>
    )
}

export default Header