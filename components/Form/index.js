import React, { useEffect, useRef, useState } from 'react'
import style from './form_.module.scss'
import Input from '../ui/Input'
import Check from '../ui/Check'
import Button from '../ui/Button'
import Value from '../ui/Value'
import Select, { components }from 'react-select'
import cn from 'classnames'
import { useIsMobile } from "../../hooks/useIsMobile";
import Link from "next/link";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Script from 'next/script';
import { useInView } from 'react-intersection-observer';

const tinkoffTerminalKey = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? '1611313361029'
    : '1611313361029DEMO';
const paypalClientId = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'AWVifSid8kSj1W3ap0jqZNuhTX8Har9m_sdMWrfC0jh2vxwsex90gPoo0XpnCizDS5KOwv4cOlqgskbu'
    : 'AWVifSid8kSj1W3ap0jqZNuhTX8Har9m_sdMWrfC0jh2vxwsex90gPoo0XpnCizDS5KOwv4cOlqgskbu';
const Form = (props) => {
    const {topQuartile} = props;
    const isMobile = useIsMobile();
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const { ref, inView: formInView } = useInView();
    const [tinkoffScripLoaded, setTinkoffScripLoaded] = useState(false);

    useEffect(() => {
        if (formInView && !tinkoffScripLoaded) {
            const script = document.createElement('script');
            script.onload = () => {
                setTinkoffScripLoaded(true);
            };
            script.src = 'https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js';
            document.body.append(script);
        }
    }, [formInView]);

    const formTransfer = [
        {
            id: 1,
            placeholder: {
                name: 'Ваше имя',
                value: 'Петр Капица'
            },
            name: 'name',
            ref: nameInputRef,
        },
        {
            id: 2,
            placeholder: {
                name: 'Ваш email',
                value: 'landau@phystech.edu'
            },
            name: 'email',
            ref: emailInputRef,
        }
    ]
    const studenttransfer = [
        {
            id: 1,
            placeholder: 'Факультет',
            name: 'faculty',
        },
        {
            id: 2,
            placeholder: 'Год окончания',
            name: 'graduate-year',
        }
    ]
    const { form } = props;
    const [isStudent, setIsStudent] = useState(false);
    const [activeValue, setActiveValue] = useState('2');
    const [activeMethod, setActiveMethod] = useState('Карта');
    const [selectedValue, setSelectedValue] = useState('40000');
    const [currentEmail, setCurrentEmail] = useState(null);
    const [currentName, setCurrentName] = useState(null);
    const [otherPlaceholder, setOtherPlaceholder] = useState('Другая сумма');
    const [namePlaceholder, setNamePlaceholder] = useState(formTransfer[0].placeholder);
    const [emailPlaceholder, setEmailPlaceholder] = useState(formTransfer[1].placeholder);
    const [nameMobilePlaceholder, setNameMobilePlaceholder] = useState(formTransfer[0].placeholder.name);
    const [emailMobilePlaceholder, setEmailMobilePlaceholder] = useState(formTransfer[1].placeholder.name);
    const [yearPlaceholder, setYearPlaceholder] = useState(studenttransfer[1].placeholder);
    const [selectDepartmentActive, setSelectDepartmentActive] = useState(false);
    const [paymentSumm, setPaymentSumm] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const selectMethod = method => {
        setActiveMethod(method);
    };

    useEffect(() => {
        setPaymentSumm(Number(selectedValue.replace(/ +/g, '').trim()));
    }, [selectedValue]);

    useEffect(() => {
        paymentSumm <= 0 ? setButtonDisabled(true) : setButtonDisabled(false);
    }, [paymentSumm]);

    useEffect(() => {
        if (currentName) {
            setNamePlaceholder({name: '', value: ''})
        }
        if (currentEmail) {
            setEmailPlaceholder({name: '', value: ''})
        }
    }, [currentName, currentEmail]);


    const departments = [
        {
            value: 'ФРТК', label: 'ФРТК'
        },
        {
            value: 'РТФ', label: 'РТФ'
        },
        {
            value: 'ФОПФ, РФФ', label: 'ФОПФ, РФФ'
        },
        {
            value: 'ФАКИ, АМФ', label: 'ФАКИ, АМФ'
        },
        {
            value: 'ФМБФ, ФМХФ, ФХФ', label: 'ФМБФ, ФМХФ, ФХФ'
        },
        {
            value: 'ФФКЭ', label: 'ФФКЭ'
        },
        {
            value: 'ФАЛТ', label: 'ФАЛТ'
        },
        {
            value: 'ФУПМ, ФПМЭ', label: 'ФУПМ, ФПМЭ'
        },
        {
            value: 'ФПФЭ', label: 'ФПФЭ'
        },
        {
            value: 'ФИВТ', label: 'ФИВТ'
        },
        {
            value: 'ФФХБ', label: 'ФФХБ'
        },{
            value: 'ФНБИК', label: 'ФНБИК'
        },{
            value: 'ФБМФ', label: 'ФБМФ'
        },{
            value: 'ФИБС', label: 'ФИБС'
        }
    ]

    const paymentMethod = [
        {id: 1, name: 'Карта', icon: "🇷🇺"},
        {id: 2, name: 'Перевод', icon: "🇷🇺"},
        {id: 3, name: 'PayPal', icon: "🌎"},
    ]

    const paymentValue = [
        {
            id: 1,
            value: '5000',
            tooltip: 'test test'
        },
        {
            id: 2,
            value: '40 000',
            tooltip: 'Этого хватит на месяц интернета для целой группы студентов'
        },
        {
            id: 3,
            value: '100 000',
            tooltip: 'test test test '
        },
    ]
    const DropdownIndicator = (
        props
    ) => {
        return (
            <components.DropdownIndicator {...props}>
                <svg style={selectDepartmentActive? {
                    width: '1.5rem',
                    height: '0.9rem',
                    marginRight: '-8px',
                    transform: 'rotate(180deg)',
                    transformOrigin: 'center',
                    transition: '0.3s transform ease-in-out'}
                    : {
                        width: '1.5rem',
                        height: '0.9rem',
                        marginRight: '-8px',
                        transform: 'rotate(0)',
                        transformOrigin: 'center',
                        transition: '0.3s transform ease-in-out'
                }
                    }
                     xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="9"
                    fill="none"
                    viewBox="0 0 15 9"
                >
                    <path
                        fill="#fff"
                        d="M7.549 7.776l-.354.354.354.353.353-.353-.353-.354zM.494 1.43l6.701 6.7.707-.706-6.7-6.701-.708.707zm7.409 6.7l6.7-6.7-.707-.707-6.7 6.7.707.708z"
                    />
                </svg>
            </components.DropdownIndicator>
        );
    };
    const customStyles = {
        container: (provided, state) => ({
            ...provided,
            width: '100%',
            color: "white",
            height: '4.4rem',
            borderRadius: '0.5rem',
            background: 'transparent',
            padding: '0 1.5rem',
            fontSize: '1.6rem',
            fontWeight: 'normal',
            boxShadow: '0 0 0 1px white inset',
            transition: '0.3s box-shadow ease-in-out',
            display: 'flex',
            cursor: 'pointer',
            '&:hover': {
                boxShadow: '0 0 0 2px white inset'
            }
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: '0',

        }),
        menuList: (provided, state) => ({
            ...provided,
            maxHeight: 'none',
            padding: '0.5rem 1rem',
            background: 'white'

        }),
        option: (provided, state) => ({
            ...provided,
            color: '#252F3C',
            padding: '1rem 0',
            borderBottom: '1px solid #252F3C',
            fontSize: '1.6rem',
            lineHeight: '130%',
            cursor: 'pointer',
            background: 'white',
            '&:active': {
                background: 'white',
            },
            '&:last-child': {
                borderBottom: 'none',
            }

        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: 'white',
            margin: '0'
        }),
        menu: (provided, state) => ({
            ...provided,
            width: '100%',
            height: 'auto',
            borderBottom: '1px dotted pink',
            color: "white",
            left: '0',
            zIndex: '3'
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: 'none'
        }),
        IndicatorsContainer: (provided, state) => ({
            ...provided,
            padding: '0'
        }),

        control: (provided, state) => ({
            ...provided,
            width: '100%',
            color: "white",
            height: '4.4rem',
            background: 'transparent',
            fontSize: '1.6rem',
            fontWeight: 'normal',
            display: 'flex',
            padding: '0',
            border: 'none',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: 'none'
        }),

        singleValue: (provided, state) => ({
            ...provided,
            color: "white"
        }),
    }

    const createPayPalOrder = async (data, actions) => {
      const {result, id: paymentId} = await (await fetch('https://api.miptbase.org/id')).json();
      if (result !== 'success') return;
      return actions.order.create({
        id: paymentId,
        purchase_units: [
          {
            amount: {
              value: selectedValue,
            },
          },
        ],
      });
    };
    // useEffect(async () => {
    //   const response = await (
    //     await fetch(`http://api.ipstack.com/check?access_key=${IPSTACK_API_KEY}`)
    //   ).json();
    //   if (response.country_code !== 'RU') {
    //     console.log('not ru');
    //   }
    // }, []);

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {result, id: paymentId} = await (await fetch('https://api.miptbase.org/id')).json();
        if (result === 'success') {
            localStorage.setItem('paymentData', JSON.stringify({
                paymentId,
                name: formData.get('name'),
                email: formData.get('email'),
                value: selectedValue,
            }));

            if (activeMethod === 'Перевод') {
                openTransfer();
            }

            if (activeMethod === 'Карта') {
                handlerClick();
            }
        } else {
            console.log('error occured');
        }
    };

    const openTransfer = () => {
        window.open('/transfer');
    }


    const hiddenForm = `      <form style="visibility: hidden; height: 0;" id='payForm' name="TinkoffPayForm" class="form" onsubmit="pay(this); return false;">
                    <div class="form__title"> Улучшим вместе жизнь студентов Физтеха!</div>
                <input class="tinkoffPayRow" type="hidden" name="terminalkey" value="${tinkoffTerminalKey}"/>
                    <input class="tinkoffPayRow" type="hidden" name="frame" value="false" />
                        <input class="tinkoffPayRow" type="hidden" name="language" value="ru" />
                            <input class="tinkoffPayRow" type="text" name="amount" value=${paymentSumm}
                                   required />
                               
                                 
                                        <input class="tinkoffPayRow" type="text" placeholder="ФИО плательщика"
                                               name="name" value=${currentName} />
                                            <input class="tinkoffPayRow" type="text" placeholder="E-mail"
                                                   name="email"  value=${currentEmail} />
                                              
                                                    <input id='submitButton' class="tinkoffPayRow" type="submit" value="Оплатить" />
            </form>`

    function createHiddenForm() {
        return {__html: hiddenForm};
    }

    function CreatedForm() {
        return <div dangerouslySetInnerHTML={createHiddenForm()} />;
    }

    let submitButton;

    useEffect(() => {
        submitButton = document.getElementById('submitButton');
    });

    const handlerClick = () => {
        submitButton.click()
    }
    return (
        <>
            {tinkoffScripLoaded && <>
                <Script strategy="beforeInteractive">{`
                    const terminalkey = document.forms.TinkoffPayForm.terminalkey
                    const widgetParameters = {
                        container: 'tinkoffWidgetContainer',
                        terminalKey: terminalkey.value,
                        paymentSystems: {
                            GooglePay: {
                                environment: "TEST",
                                merchantId: "12345678901234567890",
                                buttonColor: "black",
                                buttonType: "short",
                                paymentInfo: function () {
                                    return {
                                        infoEmail: "E-mail для отправки информации о платеже",
                                        paymentData: document.forms.TinkoffPayForm
                                    }
                                }
                            }

                        },
                    };
                    initPayments(widgetParameters);
                `}</Script>
                <CreatedForm />
            </>}


            <form ref={ref} onSubmit={onSubmit} className={style.form}>
                {!isMobile
                && (
                    <>
                        <div className={style.input}>
                            <div className={style.placeholder}>
                                <span className={style['placeholder-text']}>{namePlaceholder.name} </span> <span className={style['placeholder-value']}>{namePlaceholder.value}</span>
                            </div>
                            <Input
                                color='white'
                                name={'name'}
                                ref={nameInputRef}
                                onInput=  {(e)=> {
                                    setCurrentName(e.target.value)
                                }
                                }
                                onFocus={() => {
                                    setNamePlaceholder({name: '', value: ''})
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setNamePlaceholder({name: '', value: ''})
                                    } else {
                                        setNamePlaceholder(formTransfer[0].placeholder)
                                    }
                                }}
                            />
                        </div>

                        <div className={style.input}>
                            <div className={style.placeholder}>
                                <span className={style['placeholder-text']}>{emailPlaceholder.name} </span> <span className={style['placeholder-value']}>{emailPlaceholder.value}</span>
                            </div>
                            <Input
                                color='white'
                                name={'email'}
                                ref={nameInputRef}
                                onInput=  {(e)=> {
                                    setCurrentEmail(e.target.value)
                                }
                                }
                                onFocus={() => {
                                    setEmailPlaceholder({name: '', value: ''})
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setEmailPlaceholder({name: '', value: ''})
                                    } else {
                                        setEmailPlaceholder(formTransfer[1].placeholder)
                                    }
                                }}
                            />
                        </div>
                    </>
                )}
                {isMobile
                && (
                    <>
                        <div className={style.input}>
                            <div className={style.placeholder}>
                                <span className={style['placeholder-text']}>{nameMobilePlaceholder} </span>
                            </div>
                            <Input
                                color='white'
                                name={'name'}
                                ref={nameInputRef}
                                onInput=  {(e)=> {
                                    setCurrentName(e.target.value)
                                }
                                }
                                onFocus={() => {
                                    setNameMobilePlaceholder('')
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setNameMobilePlaceholder('')
                                    } else {
                                        setNameMobilePlaceholder(formTransfer[0].placeholder.name)
                                    }
                                }}
                            />
                        </div>

                        <div className={style.input}>
                            <div className={style.placeholder}>
                                <span className={style['placeholder-text']}>{emailMobilePlaceholder} </span>
                            </div>
                            <Input
                                color='white'
                                name={'name'}
                                ref={nameInputRef}
                                onInput=  {(e)=> {
                                    setCurrentEmail(e.target.value)
                                }
                                }
                                onFocus={() => {
                                    setEmailMobilePlaceholder('')
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setEmailMobilePlaceholder('')
                                    } else {
                                        setEmailMobilePlaceholder(formTransfer[1].placeholder.name)
                                    }
                                }}
                            />
                        </div>
                    </>
                )}


                <div className={style.hidden}>
                    <div className={style.check}>
                        <Check
                            color='white'
                            text='Я учился/учусь в МФТИ'
                            id='isStudent'
                            checkChild={true}
                            functionCheck={()=> setIsStudent(!isStudent)}
                            name='member'
                        >
                        </Check>
                    </div>

                    <div className={cn({
                        [style.student]: true,
                        [style.student_active]: isStudent,
                        [style.student_select_active]: selectDepartmentActive
                    })}>

                        <div className={style.input}>
                            {!isMobile &&
                                <Select options={departments}
                                        onMenuOpen={() => {setSelectDepartmentActive(true)}}
                                        onMenuClose={() => {setSelectDepartmentActive(false)}}
                                        styles={customStyles}
                                        placeholder={'Факультет'}
                                        isSearchable={ false }
                                        components={{ DropdownIndicator }}
                                        instanceId={'department'}
                                        inputId={'department'}
                                />
                            }
                            {
                                isMobile &&
                                <select defaultValue={'DEFAULT'} className={cn(
                                    style.select,
                                    style.select_color_white
                                )} name="departments">
                                    <option  value="DEFAULT" >Факультет</option>
                                    {departments.map(department => (
                                        <option key={department.value} value={department.value}>{department.value}</option>
                                    ))}
                                </select>
                            }


                        </div>
                        <div className={style.input}>
                            <Input
                                color='white'
                                placeholder={yearPlaceholder}
                                name={studenttransfer[1].name}
                                onFocus={() => {
                                    setYearPlaceholder('')
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setYearPlaceholder('')
                                    } else {
                                        setYearPlaceholder(studenttransfer[1].placeholder)
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>



                <div className={style['pay-container']}>
                    <div className={style.method}>
                        {paymentMethod.map(method => (
                            <div
                                className={(activeMethod === method.name) ? [style.item + ' ' + style.item_active] : [style.item]}
                                tabIndex="0"
                                key={method.id}
                                onClick={()=> {selectMethod(`${method.name}`)}}
                            >
                                <div className={style['method-name']}>{method.name}
                                    {
                                        method.icon &&
                                        <div className={cn(
                                            style['method-icon'],
                                            style[`method-icon_${method.id}`]
                                        )}>
                                            {method.icon}
                                        </div>
                                    }
                                </div>

                            </div>
                        ))}
                        <div className={style.item} tabIndex="0">
                            ...
                        </div>
                    </div>

                    <div className={style.value}>
                        {!isMobile
                        && (
                            <>
                                <div className={style['value-items']}>
                                    {paymentValue.map(valueItem => (
                                        <Value key={valueItem.id}
                                               mod='select'
                                               value={valueItem.value}
                                               functionValueActive = {()=> {setSelectedValue(`${valueItem.value}`); setActiveValue(`${valueItem.id}`)}}
                                               isSelected = {activeValue == valueItem.id}
                                        />
                                    ))}
                                </div>
                                <div className={style['custom-donate']}>
                                    <Input
                                        color='white'
                                        mod='select'
                                        placeholder = {otherPlaceholder}
                                        onClick={(e)=> {
                                            setActiveValue('input')
                                            if (e.target.value) {
                                                setSelectedValue(e.target.value);
                                            }
                                        }}
                                        isSelected = {activeValue === 'input'}
                                        name="custom-donate-value"
                                        onInput=  {(e)=> { setSelectedValue(e.target.value)}}
                                        onFocus={() => setOtherPlaceholder('')}
                                        onBlur={(e) => {setOtherPlaceholder('Другая сумма');
                                            if ((e.target.value) === '')
                                            {
                                                setActiveValue(0)
                                            }
                                        }}
                                    />
                                </div>
                            </>
                        )}
                        {isMobile
                        && (
                            <div className={style['value-items']}>
                                {paymentValue.map(valueItem => (
                                    <Value key={valueItem.id}
                                           mod='select'
                                           value={valueItem.value}
                                           functionValueActive = {()=> {setSelectedValue(`${valueItem.value}`); setActiveValue(`${valueItem.id}`)}}
                                           isSelected = {activeValue == valueItem.id}
                                    />
                                ))}
                                <div className={cn(
                                    style['value-item'],
                                    style['value-item_custom-donate']
                                )}>
                                    <Input
                                        color='white'
                                        mod='select'
                                        placeholder = {otherPlaceholder}
                                        onClick={()=> {setActiveValue('input')}}
                                        isSelected = {activeValue === 'input'}
                                        name="custom-donate-value"
                                        onInput=  {(e)=> { setSelectedValue(e.target.value)}}
                                        onFocus={() => setOtherPlaceholder('')}
                                        onBlur={(e) => {setOtherPlaceholder('Другая сумма');
                                            if ((e.target.value) === '')
                                            {
                                                setActiveValue(0)
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                        )}



                    </div>

                    {!isMobile && (
                        <div className={style.tooltip}>
                            {paymentSumm <= 0 && (
                                `А комлексные числа сюда не хотите вставить? :)`
                            )}
                            {paymentSumm < 50000 && paymentSumm > 0 && (
                                `Любой вклад важен для нас! Если добавить еще ${50000 - paymentSumm} руб., то пожертвования примерно хватит на 1 интернет-место в студгородке`
                            )}
                            {paymentSumm >= 50000 && paymentSumm < 100000 && (
                                `Должно хватить примерно на 1 интернет-места в студгородке! Добавьте еще ${100000 - paymentSumm} руб., чтобы войти в закрытый клуб доноров`
                            )}
                            {paymentSumm >= 100000 && paymentSumm < topQuartile && (
                                `Этого хватит, чтобы войти в клуб доноров. Добавьте еще ${topQuartile - paymentSumm} руб., чтобы войти в топ-25% доноров`
                            )}
                            {paymentSumm >= topQuartile && (
                                "Это крутое пожертвование, которым вы сможете гордиться"
                            )}
                        </div>
                    )}
                </div>
                <div className={cn({
                    [style.buttons]: true,
                    [style.buttons_single]: true,
                })}>
                    
                      {activeMethod === 'Карта' && tinkoffScripLoaded && <>
                        <div className={cn({
                            [style['pay-button']]: true,
                            [style['pay-button_no_active']]: true,
                        })} id="tinkoffWidgetContainer"   />
                        <div className={cn({
                            [style['pay-button-main']]: true,
                            [style['pay-button-main_100']]: true,
                        })}>
                            <Button
                                placeholder='Поддержать'
                                color='orange'
                                type='submit'
                                text='Поддержать'
                                width="100"
                                disabled={buttonDisabled}
                            />
                        </div>
                      </>}
                      {activeMethod === 'Перевод' && <div className={cn({
                            [style['pay-button-main']]: true,
                            [style['pay-button-main_100']]: true,
                        })}>
                          <Button
                              placeholder='Поддержать'
                              color='orange'
                              type='submit'
                              text='Поддержать'
                              width="100"
                              disabled={buttonDisabled}
                          />
                      </div>}
                      {activeMethod === 'PayPal' && 
                        <PayPalScriptProvider options={{
                            currency: 'RUB',
                            'client-id': paypalClientId,
                        }}>
                            <PayPalButtons createOrder={createPayPalOrder} />
                        </PayPalScriptProvider>
                      }
                </div>


                <div className={style.privacy}>
                    <span>Отправляя свое пожертвование, вы соглашаетесь с </span>
                    <span className={style.link} >
                          <Link href="privacy">
                                <a>
                                    Политикой конфиденциальности
                                </a>
                        </Link>
                    </span>
                    <span>, даёте своё согласие на обработку персональных данных и принимаете условия договора пожертвования.</span>
                </div>


            </form>
        </>
    )
}

export default Form