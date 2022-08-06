import type { NextPage } from 'next'
import { useState } from 'react'
import { css } from '@emotion/css'

import styles from './index.module.css'

const Home: NextPage = () => {

  const [isCityShw, setIsCityShw] = useState(false)
  const [isVltShw, setIsVltShw] = useState(false)
  const [inptCtVl, setInptCtVl] = useState('')

  let cityShwClassName = ''
  let vltShwClassName = ''
  let isShwHlpMessClassName = ''
  let isShwHlpWhenClickMessClassName = ''
  
  if (!inptCtVl) {
    isShwHlpMessClassName += styles.show
    isShwHlpWhenClickMessClassName += styles.hide
  } else {
    isShwHlpMessClassName += styles.hide
    isShwHlpWhenClickMessClassName += styles.show
  }

  if (isCityShw) {
    cityShwClassName += styles.show
  } else {
    cityShwClassName += styles.hide
  }

  if (isVltShw) {
    vltShwClassName += styles.show
  } else {
    vltShwClassName += styles.hide
  }

  const onCityClck = (e: any) => {
    setIsCityShw(!isCityShw)
  }

  const onVltClck = (e :any) => {
    setIsVltShw(!isVltShw)
  }

  const inptCtVlChange = (e: any) => {
    setInptCtVl(e.target.value)
  }

  return <div className='content'>
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
        <ul className={styles.deliveryGroup}>
          <li>
            <span>Откуда</span>
            <div className={styles.liContainer}>
              <ul className={styles.deliverySubgroup}>
                <li>
                  <input onChange={inptCtVlChange} value={inptCtVl}/>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.deliveryWr}>
            <span className={styles.span}>Куда</span>
            <div className={styles.liContainer}>
              <ul className={styles.deliverySubgroup}>
                <li className={styles.show}>Москва</li>
                <li className={cityShwClassName}>Владивосток</li>
              </ul>
              <div className={styles.arrow} onClick={onCityClck}></div>
            </div>
          </li>
          <li className={styles.deliveryVlt}>
            <span className={styles.span}>Валюта</span>
            <div className={styles.liContainer}>
              <ul className={styles.deliverySubgroup}>
                <li className={styles.show}>USD</li>
                <li className={vltShwClassName}>RUB</li>
              </ul>
              <div className={styles.arrow} onClick={onVltClck}></div>
            </div>
          </li>
          <li>
            <span>Курс</span>
            <div className={styles.liContainer}>
              <ul className={styles.deliverySubgroup}>
                <li>
                  <div>64.54</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <button className="btn">Далее &rarr;</button>
    </div>

    <div className={`${styles.helpWrt} ${isShwHlpMessClassName}`}>
      Для начала заполните поля выше
    </div>

    <div className={`${styles.helpWhenClick} ${isShwHlpWhenClickMessClassName}`}>Теперь нажмите на кнопку “Далее”</div>
  </div>
}

export default Home
