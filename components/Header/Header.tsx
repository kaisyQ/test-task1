import { useRouter } from "next/router"
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { css } from '@emotion/css'
import styles from './header-styles'
import mdStyles from './header.module.scss'
import Image from 'next/image'
import xImage from './../../public/img/x.png'
import Link from 'next/link'

interface IPath {
    from?: string,
    to?: string,
    currency?: string
}

import logo from './../../public/img/logo.png'

const Header = ( { from, to, currency } : IPath) => {

    const router = useRouter()
    const [isWantedToRemoveHint, setIsWantedToRemoveHint] = useState(false)
    
    const onHidePathHint = (ev: any) : void => { setIsWantedToRemoveHint(value => !value) }

    return <>
        <header className={css(styles)}>
            <div className={css({ display: 'flex', alignItems: 'center'})}>
                <Link href='/'>
                    <div className={mdStyles.headerImg}>
                        <Image src={logo} alt="logo" className={css({cursor: 'pointer'})}/>
                        {
                            router.route === '/products' && !isWantedToRemoveHint ? 
                            <div className={mdStyles.pathItemHint}>
                                <span>&uarr; Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения</span>
                                <button onClick={onHidePathHint}><Image src={xImage} /></button>
                            </div> : null
                        }
                    </div>
                </Link>
                {   router.route === '/products' && from && to && currency ? <span className={
                        css({
                                marginLeft: '60px',
                                fontFamily: `'Roboto', sans-serif`,
                                fontWeight: '500',
                                fontSize: '17px',
                                lineHeight: '17px',
                                letterSpacing: '0.2px',
                                color: '#606F7A',
                            })
                    }>
                        {from} &rarr; {to}, {currency}
                    </span>
                    : null
                }
                {
                    router.route === '/calculation' && from && to && currency ?
                        <span>Добавленая мебель(1)</span> :
                        null
                }
            </div>
            <Link href='contact'>
                <button className={`btn btnHeader`}>
                    Связаться
                </button>
            </Link>
        </header>
    </>
}

export default observer(Header)