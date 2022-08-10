import styles from './CatalogueItem.module.css'
import Image from 'next/image'
import productImage from './../../public/img/product-img.png'
import { observer } from 'mobx-react-lite'


interface ICatalogueItemProps {
    name: string,
    isChosen: boolean,
    btnClick?: Function
}

const CatalogueItem = ({ name, isChosen, btnClick }: ICatalogueItemProps) => {
    const onSelectBtnClick = (ev: any) : void => {
        if (btnClick) {
            btnClick(name)
        }
    }

    return <div className={`${styles.catalogueItem} ${ isChosen ? styles.withNoBtn : '' } `}>
        <div className={`${styles.productImage}`}>
            <Image src={productImage} />
        </div>
        <div className={`${styles.productName} ${ isChosen ? styles.withNoBtnProductName : ''}`}>{ name }</div>
        { !isChosen ? <button onClick={onSelectBtnClick} className='btn btn-product'>Выбрать</button> : null }
    </div>
} 

export default observer(CatalogueItem)