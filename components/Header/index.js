import React from 'react'
import style from "./header_.module.scss"
import Button from "../ui/Button";
import Menu from "../Menu";
import { useIsMobile } from '../../hooks/useIsMobile';
import cn from "classnames";

const Header = (props) => {
    const isMobile = useIsMobile();
    const {header, menu, scrollToDonation} = props;
    return (
        <section className={style.header}>
            <div className={style.inner}>
                <a href="/" className={style.logo}>
                    <img src={header.logo} alt='logo' />
                </a>
                {!isMobile
                && (
                    <>
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
                    </>
                )}
                {isMobile
                && (
                    <div className={style['menu-button']} >
                        <div className={cn(style['menu-line'], style['menu-line_1'])} />
                        <div className={cn(style['menu-line'], style['menu-line_2'])} />
                    </div>
                )}

            </div>
        </section>
    )
}

export default Header