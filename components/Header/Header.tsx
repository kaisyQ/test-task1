import { observer } from "mobx-react-lite"
import { css } from '@emotion/css'
import styles from './header-styles'
import Image from 'next/image'
import Link from 'next/link'

interface IPath {
    from?: string,
    to?: string,
    currency?: string
}

import logo from './../../public/img/logo.png'

const Header = ( { from, to, currency } : IPath) => {
    return <>
        <header className={css(styles)}>
            <div className={css({ display: 'flex', alignItems: 'center'})}>
                <Link href='/'>
                    <Image src={logo} alt="logo" className={css({cursor: 'pointer'})}/>
                </Link>
                {   from && to ? <span className={
                        css({
                                marginLeft: '60px',
                                fontFamily: `'Roboto', sans-serif`,
                                fontWeight: '500',
                                fontSize: '17px',
                                lineHeight: '17px',
                                letterSpacing: '0.2px',
                                color: '#606F7A'
                            })
                    }>
                        {from} &rarr; {to}, {currency}
                    </span>
                    : null
                }
            </div>
            <Link href='contact'>
                <button className={
                            css({
                            width: '132px',
                            backgroundColor: '#fff',
                            fontFamily: `'Open Sans', sans-serif`,
                            fontWeight: '600',
                            borderRadius: '3px',
                            boxShadow: '0px 4px 40px rgba(46, 80, 87, 0.12)',
                            cursor: 'pointer'
                })}>
                    Связаться
                </button>
            </Link>
        </header>
    </>
}

export default observer(Header)