import React from 'react'
import style from "./menu_.module.scss"
import Link from "next/link";
import cn from "classnames";

const Menu = (props) => {
    const {menu, color, size, footer} = props;
    return (
        <nav className={cn({
            [style.menu]: true,
            [style.menu_footer]: footer,
        })}>
            {menu.items.map((item) => (
                <div
                    className={cn({
                        [style.item]: true,
                        [style.item_black]: color === 'black',
                        [style.item_big]: size === 'big',
                        [style.item_footer]: footer,
                    })}
                    key={item.item}
                >
                    <span className={cn({
                        [style.link]: true,
                        [style.link_black]: color === 'black',
                        [style.link_big]: size === 'big',
                         [style.link_footer]: footer,
                    })}>
                        <Link href={item.link}>
                            <a>
                                {item.item}
                            </a>
                        </Link>
                    </span>
                </div>
            ))}
        </nav>
    )
}

export default Menu