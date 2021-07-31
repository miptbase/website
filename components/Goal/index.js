import React, { useState, useRef, useEffect } from 'react'
import style from "./goal_.module.scss"
import Button from "../ui/Button";
import { useIsMobile } from '../../hooks/useIsMobile';
import { Tween } from 'react-gsap';


const Goal = (props) => {
    const isMobile = useIsMobile();
    const [chartVisible, setChartVisible] = useState(false);
    const [circumference, setCircumference] = useState(0);
    const chartRef = useRef();
    const scrollHandler = _ => {
        if (chartRef.current) {
            if (chartRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
                setChartVisible(true);
            }
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);
    useEffect(() => {
        if (isMobile) {
            setCircumference(70 * (3.125* window.innerWidth/100) )
        } else {
            setCircumference(90.9 * (0.78125  * window.innerWidth/100) )
        }
    }, [isMobile]);
    const {goal, stats, scrollToDonation} = props;
    const target = stats
        .filter(item => item.Key === "Current target")[0].Value
        .replace(/[\s.,%]/g, '');
    const targetValue = Math.round((Number(target)) / 1000000);
    const percent = Number(stats
        .filter(item => item.Key === "Target progress")[0].Value
        .replace(/[\s.,%]/g, ''));
    const chartLine = String(circumference - circumference * percent / 100)
    return (
        <section className={style.goal} >
            <div className={style.container}>
                <div className={style.content}>
                    <h2 className={style.title}>
                        {goal.title}
                    </h2>
                    <p className={style.text}>
                        {goal.text}
                    </p>
                    <Button
                        text={isMobile ? `${goal.buttonMobile}` : `${goal.button}` }
                        color= 'orange'
                        buttonFunction={scrollToDonation}
                        width={isMobile ? '100' :''}
                    />
                </div>

                <div className={style.progress} ref={chartRef}>
                    {chartVisible &&
                        <div className={style['chart-container']}>
                        <Tween to={{"--val": percent}} duration={2} ease="power2.inOut">
                            <div className={style.grad}>
                            </div>
                        </Tween>
                        <Tween to={{scale: 0.65}} duration={2} ease="power2.inOut">
                            <div className={style.info}>

                            </div>
                        </Tween>
                        <Tween from={{autoAlpha: 0, translateY: '20px'}} duration={2} ease="power2.inOut">
                            <div className={style['info-content']}>
                                <div className={style.percent}>{`${percent}%`} </div>
                                <div className={style['info-text']}>
                                    {goal.caption} <br/>
                                    {`в ${targetValue} млн ₽`}
                                </div>
                            </div>
                        </Tween>
                    </div>
                    }
                </div>

            </div>
        </section>
    )
}

export default Goal