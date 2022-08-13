import { NextPage } from "next";
import styles from './products.module.css'
import { observer } from "mobx-react-lite";
import CatalogueItem from "../../components/CatalogueItem/CatalogueItem";
import { useState, useReducer } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import plusImage from '../../public/img/plus.png'
import minusImage from '../../public/img/minus.png'
import xImage from '../../public/img/x.png'
import productReducer, { initalState, setOneItemInptVlAC, setSearchInptVlAC, setSelectedItem, setTotlBruttoVlAC, setTotlNettoVlAC, setTotlVlmInptVlAC, unsetSelectedItem } from "./product-reducer";

const ProductsPage: NextPage = (props: any) => {

    const [counter, setCounter] = useState(1)
    const [isItemSelected, setIsItemSelected] = useState(false)
    const [isWantedToRemoveHint, setIsWantedToRemoveHint] = useState(false)
    const [state, dispatch] = useReducer(productReducer, initalState)

    const router = useRouter()

    const onIncrement = (ev: any) : void => { 
        ev.preventDefault()
        setCounter(counter => counter + 1) 
    }
    const onDecrement = (ev: any) : void => { 
        ev.preventDefault()
        if (counter > 1) {
            setCounter(counter => counter - 1)
        } 
    }
    const onOneItemInptChange = (ev: any) : void => { dispatch(setOneItemInptVlAC(ev.target.value)) }
    const onVolumeInptChange = (ev: any) : void => { dispatch(setTotlVlmInptVlAC(ev.target.value)) }
    const onBrtInptChange = (ev: any) : void => { dispatch(setTotlBruttoVlAC(ev.target.value)) }
    const onNettoInptChange = (ev: any) : void => { dispatch(setTotlNettoVlAC(ev.target.value)) }

    const onSearchInptChange = (ev: any) : void => { dispatch(setSearchInptVlAC(ev.target.value)) } 
    const onSeactInptFocus = (ev: any) : void => { setIsItemSelected(true) }
    
    const onSelectItemClick = (itemName: string) : void => {
        dispatch(setSelectedItem( { itemName } ))
        setIsItemSelected(true) 
    }

    const onThrowBtnClick = (ev: any) : void => {
        ev.preventDefault()
        dispatch(unsetSelectedItem())
        setIsItemSelected(false)
    }
    const onAddItemClick = (ev: any) : void => {
        ev.preventDefault()
        props.store.addSelectedItem({
            ...state.selectedItem,
            totlVlmInptVl: parseFloat(state.totlBruttoVl),
            totlBruttoVl: parseFloat(state.totlBruttoVl),
            totlNettoVl: parseFloat(state.totlNettoVl),
            oneItemVl: parseFloat(state.oneItemInptVl),
            count: counter
        })
        router.push('calculation')
    }

    const onHidePathHint = (ev: any) : void => { setIsWantedToRemoveHint(value => !value) }

    return <div className={styles.products}>
        <div className={styles.productsItem}>
            <h2 className={styles.productsTitle}>Выберите мебель, которую нужно перевезти</h2>
            <div className={styles.productsSearch}>
                <input onFocus={onSeactInptFocus} onChange={onSearchInptChange} value={state.searchInptVl} type="text" placeholder="Введите название"/>
                <button className="btn">Поиск</button>
                {
                    isItemSelected ? null : <div className={styles.SearchHint}>
                        <span>&larr;</span>
                        <p>Введите название мебели в строку поиска<br />или выберите мебель из предложенного списка</p>
                    </div>
                }
            </div>
            <div className={styles.catalogue}>
                {
                    state.searchInptVl === '' ? props.store.items.map(
                        (item: string) => <CatalogueItem key={item} btnClick={onSelectItemClick} isChosen={false} name={item}/>)
                    : props.store.items.filter((item: string) => item.includes(state.searchInptVl)).map(
                        (item: string) => <CatalogueItem key={item} btnClick={onSelectItemClick} isChosen={false} name={item}/>)

                }
            </div>
        </div>
        <div className={styles.productsItem}>
            <h2 className={styles.productsTitle}>Затем заполните следующие<br /> поля выбранного элемента:</h2>
            {
                !state.selectedItem ? <div className={styles.productSubtitle}>
                    Вы не выбрали пока ни одного элемента.
                </div> : 
                <>
                    <CatalogueItem isChosen={true} name={state.selectedItem.itemName}/>
                    <form className={styles.productsForm}>
                        <div className={styles.formGroup}>
                            <span>Кол-во:</span>
                            <div className={styles.countSelector}>
                                <button onClick={onDecrement} className={styles.countSelectorItem}>
                                    <Image src={minusImage} />
                                </button>
                                <div className={`${styles.countSelectorItem} ${styles.countSelectorCounter}`}>{ counter }</div>
                                <button onClick={onIncrement} className={styles.countSelectorItem}>
                                    <Image src={plusImage} />
                                </button>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <input onChange={onVolumeInptChange} value={state.totlVlmInptVl} placeholder="Общий объем, м^3" type="text" className={styles.formControl}/>
                        </div>
                        <div className={styles.formGroup}>
                            <input onChange={onNettoInptChange} value={state.totlNettoVl} placeholder="Общая масса нетто, кг"type="text" className={styles.formControl}/>
                        </div>
                        <div className={styles.formGroup}>
                            <input onChange={onBrtInptChange} value={state.totlBruttoVl} placeholder="Общая масса брутто, кг" type="text" className={styles.formControl}/>
                        </div>
                        <div className={styles.formGroup}>
                            <input onChange={onOneItemInptChange} value={state.oneItemInptVl} placeholder="Стоимость одной единицы" type="text" className={styles.formControl}/>
                        </div>
                        <div className={styles.formFooter}>
                            <button onClick={onThrowBtnClick} className={`btn ${styles.btnForm}`}>Сбросить</button>
                            <button onClick={onAddItemClick} className={`btn ${styles.btnForm}`}>Добавить</button>
                        </div>
                    </form>
                </>
            }
        </div>
    </div>
}

export default observer(ProductsPage)