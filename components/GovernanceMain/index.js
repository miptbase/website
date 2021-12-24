import React, {useCallback} from "react";
import style from "./governance-main_.module.scss";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/media/avatar.svg"
import { report } from "../../content/report.js"
import {useIsMobile} from "../../hooks/useIsMobile";
import donorsImages from '../../content/donorsImages.json'
import { avatarPlaceholder, toBase64} from "../../scripts/placeholder"

const CovernanceMain = (props) => {
    const { board, fund, company, boardData } = props;
    const isMobile = useIsMobile();
    const parseReport = useCallback((arr) =>{
        arr[0][0] = 'ЦК';
        const length = arr[0].filter(el => el).length;
         const newArr = arr.map((item) => item.slice(0, length));
         return newArr;
    },[])
    const parseReportMobile = useCallback((arr) =>{
        arr[0][0] = 'ЦК';
        const length = arr[0].filter(el => el).length;
        const newArr = arr.map((item) => item.slice(0, length));
        return newArr;
    },[])
    const sumArr = useCallback((arr) =>{
        return arr.map((item) => item.map((item) => item.replace('%', '')))
          .reduce((prev, next) => next.map((item, i) =>(prev[i] || []).concat(next[i])), []).
                    slice(2).map((item) => item.slice(1).
                    map((item) => Number(item) * 10).reduce((a, b) => a + b, 0) / (item.length - 1) / 10).
                    map((item) => item.toFixed(1));
    },[])
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
                        boardData.map((item) => (
                            <div className={style['board-item']} key={item.name}>
                                <div className={style['item-image']}>
                                    <Image
                                      src={
                                          donorsImages.includes(`${item['ID']}.png`) ?
                                            `/media/donors/${item.ID}.png` : avatar
                                      }
                                        alt={item['Name']}
                                        layout='fill'
                                        blurDataURL={`data:image/svg+xml;base64,${toBase64(avatarPlaceholder())}`}
                                        placeholder="blur"
                                        objectFit='cover'
                                        objectPosition='top center'
                                        sizes='16vw'
                                    />
                                </div>
                                <div className={style['item-description']}>
                                    <div className={style['item-name']}>
                                        {item['Name']}
                                    </div>
                                    <div className={style['item-content']}>
                                        <div className={style['item-info']}>
                                            {item['Title']}
                                        </div>
                                        <div className={style['item-text']}>
                                            {item['Description']}
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
                                                    <div className={style['doc-image-container']}>
                                                        <div className={style['doc-image']} />
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
                                <div className={style['item-info']}>
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
                                                    <div className={style['doc-image-container']}>
                                                        <div className={style['doc-image']} />
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
                                    { !isMobile && (
                                      parseReport(report)[0].map((item, i) => (
                                        <th className={style.th} key={i}>{item}</th>
                                      ))
                                    )
                                    }
                                    { isMobile && (
                                      <>
                                          <th className={style.th}>{parseReport(report)[0][0]}</th>
                                          <th className={style.th}>{parseReport(report)[0][1]}</th>
                                          {
                                            parseReport(report)[0].slice(2).reverse().map((item, i) => (
                                            <th className={style.th} key={i}>{item}</th>
                                          ))}
                                      </>
                                    )
                                    }

                                </tr>
                                {
                                    parseReport(report).slice(1).map((row, i) => (
                                      <tr className={style.tr} key={i}>
                                          <td className={style.td}>
                                              <span className={style['name-1']}>
                                                  {row[0]}
                                              </span>
                                          </td>
                                          <td className={style.td}>
                                              <span className={style['name-2']}>
                                                  {row[1]}
                                              </span>
                                          </td>
                                          {
                                              !isMobile && (
                                                <>
                                                    {row.slice(2).map((item, i) => (
                                                      <td className={style.td} key={i}>{item}</td>
                                                    ))}
                                                </>
                                              )
                                          }
                                          {
                                              isMobile && (
                                                <>
                                                    {row.slice(2).reverse().map((item, i) => (
                                                      <td className={style.td} key={i}>{item}</td>
                                                    ))}
                                                </>
                                              )
                                          }
                                      </tr>
                                    ))
                                }
                                <tr className={style.tr}>
                                    <td className={style.td}>
                                        <span className={style['name-1']} />
                                    </td>
                                    <td className={style.td}>
                                      <span className={style['name-2']}>
                                          Cр. доходность
                                      </span>
                                    </td>
                                    {
                                        !isMobile && (
                                          <>
                                              {
                                                  sumArr(parseReport(report)).map((item, i) => (
                                                  <td className={style.td} key={i}>{item}%</td>
                                                ))}
                                          </>
                                        )
                                    }
                                    {
                                        isMobile && (
                                          <>
                                              {
                                                  sumArr(parseReport(report)).reverse().map((item, i) => (
                                                    <td className={style.td} key={i}>{item}%</td>
                                                  ))}
                                          </>
                                        )
                                    }
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
                                                <div className={style['doc-image-container']}>
                                                    <div className={style['doc-image']} />
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