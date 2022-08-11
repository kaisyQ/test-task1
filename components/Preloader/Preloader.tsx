import Image from 'next/image'
import preloader from './../../public/preloader.gif'
import styles from './Preloader.module.css'

const Preloader = () => {
    return <div className={styles.preloader}>
        <div className={styles.preloaderImage}>
            <Image src={preloader}/>
        </div>
        <p className={styles.preloaderText}>Идет загрузка...</p>
    </div>
}

export default Preloader