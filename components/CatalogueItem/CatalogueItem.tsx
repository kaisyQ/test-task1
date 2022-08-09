import styles from './CatalogueItem.module.css'
import Image from 'next/image'
import productImage from './../../public/img/product-img.png'

interface ICatalogueItemProps {
    name: string,
    isChosen: boolean
}

const CatalogueItem = ({ name, isChosen}: ICatalogueItemProps) => {
    return <div className={styles.catalogueItem}>
        <div className={styles.productImage}>
            <Image src={productImage} />
        </div>
        <div className={styles.productName}>{ name }</div>
        { !isChosen ? <button className='btn btn-product'>Выбрать</button> : null }
    </div>
} 

export default CatalogueItem