import React from "react";
import style from "./governance-main_.module.scss";
import Image from "next/image";
import Link from "next/link";
import docImage from "../../public/media/document-icon.svg"
import SVG from 'react-inlinesvg';
import { report } from "../../content/report.json"

const CovernanceMain = (props) => {
    const { board, fund, company } = props;
    return (
        <section className={style['governance-main']}>
            <div className={style.board}>
                <h2 className={style.title}>
                    {board.title}
                </h2>
                <p className={style.text}>
                    {board.text}
                </p>
                <div className={style['board-items']}>
                    {
                        board.items.map((item) => (
                            <div className={style['board-item']} key={item.name}>
                                <div className={style['item-image']}>
                                    <Image
                                        src={`/${item.image}`}
                                        alt={item.name}
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='top center'
                                    />
                                </div>
                                <div className={style['item-description']}>
                                    <div className={style['item-name']}>
                                        {item.name}
                                    </div>
                                    <div className={style['item-content']}>
                                        <div className={style['item-text']}>
                                            {item.info}
                                        </div>
                                        <div className={style['item-text']}>
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={style['document-container']}>
                    <h3 className={style['document-title']}>
                        {board.subTitle}
                    </h3>
                    <div className={style.documents}>
                        {
                            board.docItems.map(
                                (item, i) => (
                                    <>
                                        <div className={style['doc-item']} key={i}>
                                            <Link href={item.link}>
                                                <a className={style.link} target='_blank'>
                                                    <div className={style['doc-image']}>
                                                        <div className={style['icon-text']}>PDF</div>
                                                    </div>
                                                    <div className={style['doc-name']}>
                                                        {item.name}
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </>
                                )
                            )
                        }
                    </div>
                </div>

            </div>
            <div className={style.fund}>
                <div className={style['fund-inner']}>
                <h2 className={style.title}>
                    {fund.title}
                </h2>
                <p className={style.text}>
                    {fund.text}
                </p>
                <div className={style['fund-items']}>
                    {
                        fund.items.map((item) => (
                            <div className={style['fund-item']} key={item.name}>
                                <div className={style['item-name']}>
                                    {item.name}
                                </div>
                                <div className={style['item-text']}>
                                    {item.info}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={style['document-container']}>
                    <h3 className={style['document-title']}>
                        {fund.subTitle}
                    </h3>
                    <div className={style.documents}>
                        {
                            fund.docItems.map(
                                (item, i) => (
                                    <>
                                        <div className={style['doc-item']} key={i}>
                                            <Link href={item.link}>
                                                <a className={style.link} target='_blank'>
                                                    <div className={style['doc-image']}>
                                                        <div className={style['icon-text']}>PDF</div>
                                                    </div>
                                                    <div className={style['doc-name']}>
                                                        {item.name}
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </>
                                )
                            )
                        }
                    </div>
                </div>
                </div>
            </div>
            <div className={style.company}>
                <h2 className={style.title}>
                    {company.title}
                </h2>
                <p className={style.text}>
                    {company.text}
                </p>
                <div className={style['table-container']}>
                    <div className={style['table-header']}>
                        <div className={style['table-title']}>
                            {company.tableTitle}
                        </div>
                        <div className={style['table-info']}>
                            {company.tableInfo}
                        </div>
                    </div>
                            <table className={style.table}>
                                <tbody>
                                <tr className={style.tr}>
                                    <th className={style.th}>Целевой капитал</th>
                                    <th className={style.th}>2016</th>
                                    <th className={style.th}>2017</th>
                                    <th className={style.th}>2018</th>
                                    <th className={style.th}>2019</th>
                                    <th className={style.th}>2020</th>
                                    <th className={style.th}>2021</th>
                                    <th className={style.th}>2022</th>
                                    <th className={style.th}>2023</th>
                                    <th className={style.th}>2024</th>
                                    <th className={style.th}>2025</th>
                                </tr>
                                <tr className={style.tr}>
                                   <td className={style.td}>
                                       <span>ЦК 1</span>
                                   </td>
                                    <td className={style.td}>1</td>
                                    <td className={style.td}>2</td>
                                    <td className={style.td}>6</td>
                                    <td className={style.td}>7</td>
                                    <td className={style.td}>12</td>
                                    <td className={style.td}>23</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                </tr>
                                <tr className={style.tr}>
                                    <td className={style.td}>
                                        <span>ЦК 2</span>
                                    </td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>3</td>
                                    <td className={style.td}>5</td>
                                    <td className={style.td}>8</td>
                                    <td className={style.td}>13</td>
                                    <td className={style.td}>45</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                </tr>
                                <tr className={style.tr}>
                                    <td className={style.td}>
                                        <span>ЦК 3</span>
                                    </td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>4</td>
                                    <td className={style.td}>10</td>
                                    <td className={style.td}>2334</td>
                                    <td className={style.td}>3</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                </tr>
                                <tr className={style.tr}>
                                    <td className={style.td}>
                                        <span>ЦК 4</span>
                                    </td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>—</td>
                                    <td className={style.td}>9</td>
                                    <td className={style.td}>323</td>
                                    <td className={style.td}>5</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                </tr>
                                <tr className={style.tr}>
                                    <td className={style.td}>
                                        <span>ЦК 5</span>
                                    </td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>—</td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>223</td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                </tr>
                                <tr className={style.tr}>
                                    <td className={style.td}>
                                        <span>ЦК 6</span>
                                    </td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>—</td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>44</td>
                                    <td className={style.td}>2</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                </tr>
                                <tr className={style.tr}>
                                    <td className={style.td}>
                                        <span>ЦК 7</span>
                                    </td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>2</td>
                                    <td className={style.td}>5</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                </tr>
                                <tr className={style.tr}>
                                    <td className={style.td}>
                                        <span>ЦК 8</span>
                                    </td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}></td>
                                    <td className={style.td}>2</td>
                                    <td className={style.td}>23</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                    <td className={style.td}>-</td>
                                </tr>
                                </tbody>
                            </table>
                </div>
                <div className={style['document-container']}>
                    <h3 className={style['document-title']}>
                        {company.subTitle}
                    </h3>
                    <div className={style.documents}>
                        {
                            company.docItems.map(
                                (item, i) => (
                                    <>
                                        <div className={style['doc-item']} key={i}>
                                            <Link href={item.link}>
                                                <a className={style.link} target='_blank'>
                                                    <div className={style['doc-image']}>
                                                        <div className={style['icon-text']}>PDF</div>
                                                    </div>
                                                    <div className={style['doc-name']}>
                                                        {item.name}
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </>
                                )
                            )
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CovernanceMain