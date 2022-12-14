import type { NextPage } from 'next'
import { useEffect, useReducer, useState } from 'react'
import { css } from '@emotion/css'
import styles from './index.module.css'
import indexReducer, { initialState, setCityToAC, setInptVlAC, setVltAC } from './index-reducer'
import { ICurrencyType } from '../../store/store-types'
import Link from 'next/link'

const Home: NextPage = (props: any) => {

  const [state, dispatch] = useReducer(indexReducer, initialState)
  const [isHovered, setIsHovered] = useState(false)


  let btnHintClass = styles.hide
  let inptHintClass = styles.hide

  if (state.tmpInputValue !== '') { btnHintClass = styles.show }
  else { inptHintClass = styles.show }

  if (isHovered) {
    inptHintClass = styles.hide
    btnHintClass = styles.hide
  }

  const onInptChange = (ev: any) : void => { dispatch(setInptVlAC(ev.target.value)) }

  const onLiCityClick = (ev: any) : void => { dispatch(setCityToAC(ev.target.innerText)) }
  const onLiVltClick = (ev: any) : void => { dispatch(setVltAC(ev.target.innerText)) }
  const onLiChineseCityClick = (ev: any) : void => { dispatch(setInptVlAC(ev.target.innerText)) }
  const onThenBtnClick = (ev: any) : void => {
    props.store.calcObj = { from: state.tmpInputValue, to: state.cityTo, currency: state.vltValue }
  }


  const onSelectMouseUp = (ev: any) : void => { setIsHovered(true) }
  const onSelectMouseLeave = (ev: any) : void => { setIsHovered(false) }
  const onInptFocus = (ev: any) : void => { setIsHovered(true) }
  const onBInptBlur = (ev: any) : void => { setIsHovered(false) }

  return <div className={`content`}>
    <h1 className={css({
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 400,
      fontSize: '48px',
      lineHeight: '64px',
      color: '#606F7A',
      marginBottom: '48px'
    })}>
      Рассчитайте <br /> стоимость доставки из Китая
    </h1>
    <div className={styles.deliveryBlock}>
      <div className={styles.deliveryGroupContainer}>
        <div className={`tip ${styles.helpWrt}  ${inptHintClass}`}>Для начала заполните поля выше <span className={`pointer`}>&uarr;</span></div>
        <ul className={styles.deliveryGroup} >
          <li className={styles.deliveryGroupItem}>
            <span>Откуда</span>
            <a className={`${styles.deliveryLink} ${styles.cityLink}`}>
                <input value={state.tmpInputValue} onBlur={onBInptBlur} onFocus={onInptFocus} onChange={onInptChange}/>
            </a>
            <ul onClick={onLiChineseCityClick} className={styles.deliverySubgroup}>
            {
              props.store.chineseCities.map((city: string) => {
                return state.tmpInputValue !== '' && city.includes(state.tmpInputValue) && state.tmpInputValue !== city ?
                <li key={city}><a className={styles.deliveryLink}>{city}</a></li> : null
              })
            }
            </ul>
          </li>
          <li className={styles.deliveryGroupItem} onMouseLeave={onSelectMouseLeave} onMouseEnter={onSelectMouseUp} onClick={onLiCityClick}>
            <span className={styles.span}>Куда</span>
            <a className={`${styles.deliveryLink} ${styles.hasSubgroup} ${styles.cityLink}`}>
              { state.cityTo }
              <div className={styles.arrow} ></div>
            </a>
            <ul className={styles.deliverySubgroup}>
            {
              props.store.cities.map((city: string) => {
                return state.cityTo !== city ? <li key={city}><a className={`${styles.deliveryLink} ${styles.hide}`}>{city}</a></li> : null
              })
            }
            </ul>
          </li>
          <li className={styles.deliveryGroupItem} onMouseLeave={onSelectMouseLeave} onMouseEnter={onSelectMouseUp} onClick={onLiVltClick}>
            <span className={styles.span}>Валюта</span>
              <a className={`${styles.deliveryLink} ${styles.hasSubgroup}`}>
                { state.vltValue }
                <div className={styles.arrow}></div>
              </a>
              <ul className={styles.deliverySubgroup}>
              {
                props.store.currencies.map((currency: ICurrencyType) =>{
                  return state.vltValue !== currency.name ? <li key={currency.name}><a className={`${styles.deliveryLink} ${styles.hide}`}>{currency.name}</a></li> : null
                })
              }
              </ul>
          </li>
          <li className={styles.deliveryGroupItem}>
            <span>Курс</span>
            {
              props.store.currencies.map((currency: ICurrencyType) =>{
                return state.vltValue === currency.name ?  <a key={currency.name} className={styles.deliveryLink}>{currency.value} руб.</a> : null
              })
            }
          </li>
        </ul>
      </div>
      <Link href='products'>
        <button className="btn" onClick={onThenBtnClick}>
          <a>
            Далее
            <span className={`pointer`}>&rarr;</span>
          </a>
          <div className={`tip ${styles.helpWhenClick} ${btnHintClass}`}>
            Теперь нажмите на кнопку “Далее”
            <span className={`pointer`}>&darr;</span></div>
        </button>
      </Link>
    </div>
  </div>
}

export default Home
