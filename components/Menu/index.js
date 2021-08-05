import React from 'react'
import style from "./menu_.module.scss"
import Link from "next/link";
import cn from "classnames";

const Menu = (props) => {
    const {menu, color} = props;
    return (
        <nav className={style.menu}>
            {menu.items.map((item) => (
                <div
                    className={cn({
                        [style.item]: true,
                        [style.item_black]: color === 'black'
                    })}
                    key={item.item}
                >
                    <span className={cn({
                        [style.link]: true,
                        [style.link_black]: color === 'black'
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