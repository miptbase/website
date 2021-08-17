import React, { useState, useRef, useEffect } from 'react'
import style from "./header_.module.scss"
import Button from "../ui/Button";
import Menu from "../Menu";
import cn from "classnames";
import Link from 'next/link'
import Image from "next/image";
import SVG from 'react-inlinesvg';

const Header = (props) => {
    const {header, menu, scrollToDonation, color, goToMain, buttonColor} = props;
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const height = Math.max(
            window.innerHeight, document.documentElement.clientHeight
        );
        if (menuOpen) {
            document.body.style.height = `${height}px`;
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.height = 'auto';
            document.body.style.overflow = 'visible';
        }
    }, [menuOpen]);
    return (
        <section className={style.header}>
            <div className={style.inner}>
                <div className={style.logo}>
                    <Link href="/">
                        <a>
                            <SVG className={style['logo-img']} src={color === 'black'?  `/${header.logoBlack}` : `/${header.logo}`} />
                        </a>
                    </Link>
                </div>
                <div className={style.menu}>
                    <Menu menu={menu} color={color} size='big'/>
                </div>
                <div className={style['button-container']}>
                    {!goToMain &&
                        <Button
                            color={buttonColor === 'black' ? 'black' : buttonColor === 'orange' ?  'orange' : 'white'}
                            text={header.button}
                            padding='1.6rem'
                            height='4.1rem'
                            buttonFunction={scrollToDonation}
                        />
                    }
                    {goToMain &&
                        <Link href={'/'}>
                            <a className={style.link}>
                                <Button
                                    text={header.button}
                                    color='orange'
                                    padding='1.6rem'
                                />
                            </a>
                        </Link>
                    }
                </div>

                <div className={cn({
                    [style['menu-button']]: true,
                    [style['menu-button_open']]: !!menuOpen
                })} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={cn({[style['menu-line']]: true, [style['menu-line_1']]: true, [style['menu-line_1_open']]: !!menuOpen})} />
                    <div className={cn({[style['menu-line']]: true, [style['menu-line_2']]: true, [style['menu-line_2_open']]: !!menuOpen})} />
                </div>


                <div ref={menuRef} className={cn({
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