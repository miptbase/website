import React from 'react'
import style from "./menu_.module.scss"
import Link from "next/link";

const Menu = (props) => {
    const {menu} = props;
    return (
        <nav className={style.menu}>
            {menu.items.map((item) => (
                <div
                    className={style.item}
                    key={item.item}
                >
                    <span className={style.link}>
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