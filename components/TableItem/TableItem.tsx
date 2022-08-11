import Image from 'next/image'
import styles from './TableItem.module.css'
import productImage from './../../public/img/product-img.png'
import xImage from './../../public/img/x.png'

interface ITableItemProps {
    name: string,
    count: number,
    nettoCnt: number,
    bruttoCnt: number,
    vlm: number,
    price: number,
    deleteFn?: Function
}

const TableItem = (props: ITableItemProps) => {
    return  <tr>
        <td>
            <div className={styles.ImageWrapper}>
                <Image className={styles.furnitureItemImage} src={productImage} />
            </div>
        </td>
        <td>{props.name}</td>
        <td>{props.count}</td>
        <td>{props.nettoCnt}</td>
        <td>{props.bruttoCnt}</td>
        <td>{props.vlm}</td>
        <td>{props.price} руб.</td>
        <td><div><Image src={xImage}/></div></td>
    </tr>
} 

export default TableItem