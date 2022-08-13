import { NextPage } from "next";
import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Preloader from "../../components/Preloader/Preloader";
import styles from './calculation.module.css'
import TableItem from "../../components/TableItem/TableItem";
import { ISelectedItem } from "../../store/store-types";

const CalculationPage: NextPage = (props: any) => {
    const [isShwingCalcBlock, setIsShwingCalcBlock] = useState(false)
    const router = useRouter()
    const onCalcBtnClick = (ev: any) : void => {
        setIsShwingCalcBlock(true)
    }

    const onSaveCalcBtnClick = (ev: any) : void => {
        props.store.addCalculation(55000)
    }
    const onThrowBtnClick = (ev: any) : void => {
        props.store.clearSelectedItems()
        props.store.calcObj = null
        router.push('/')
    }
    return <div className={styles.addedFurniture}>
        <div className={`scrollbar ${styles.tableScroll}`}>
            <table className={styles.furnitureTable}>
                <thead>
                    <tr>
                        <th className={styles.transparent}></th>
                        <th className={styles.transparent}></th>
                        <th className={`${styles.visible} ${styles.furnitureTableHeader}`}>Кол-во</th>
                        <th className={`${styles.visible} ${styles.furnitureTableHeader}`}>Общая масса нетто, кг</th>
                        <th className={`${styles.visible} ${styles.furnitureTableHeader}`}>Общая масса брутто, кг</th>
                        <th className={`${styles.visible} ${styles.furnitureTableHeader}`}>Общий объем, м3</th>
                        <th className={`${styles.visible} ${styles.furnitureTableHeader}`}>Стоимость единицы</th>
                        <th className={`${styles.visible} ${styles.furnitureTableHeader}`}>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.store.selectedItems.map((item : ISelectedItem) =>
                        <TableItem
                            name={item.itemName}
                            count={item.count}
                            nettoCnt={item.totlNettoVl}
                            bruttoCnt={item.totlBruttoVl}
                            vlm={item.totlVlmInptVl}
                            price={item.oneItemVl}
                        />)
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td className={styles.transparent}></td>
                        <td className={styles.visible}>Итого:</td>
                        <td className={styles.visible}>{props.store.getTotalSelectVls().count}</td>
                        <td className={styles.visible}>{props.store.getTotalSelectVls().totlNettoVl}</td>
                        <td className={styles.visible}>{props.store.getTotalSelectVls().totlBruttoVl}</td>
                        <td className={styles.visible}>{props.store.getTotalSelectVls().totlVlmtVl}</td>
                        <td className={styles.visible}>{props.store.getTotalSelectVls().oneItemVl}руб.</td>
                        <td onClick={onThrowBtnClick} className={styles.visible}>Сбросить</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <footer className={styles.footer}>
            <div className={styles.tableControls}>
                <div className={styles.controlsItem}>
                    <Link href='/products'>
                        <button  className={`btn ${styles.btnFooter}`}>Добавить +</button>
                    </Link>
                    <button onClick={onCalcBtnClick} className={`btn ${styles.btnFooter}`}>Рассчитать</button>
                </div>
                {
                    isShwingCalcBlock ?
                    <>
                    <div className={styles.controlsItem}>
                        <table className={styles.controlsTable}>
                            <tbody>
                                <tr>
                                    <td>Стоимость доставки: </td>
                                    <td>50000 руб.</td>
                                </tr>
                                <tr>
                                    <td>Таможенные платежи: </td>
                                    <td>5000 руб.</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Итого: </td>
                                    <td>55000 руб.</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className={styles.controlsItem}>
                        <button onClick={onSaveCalcBtnClick} className={`btn ${styles.btnFooter}`}>Сохранить расчет &darr;</button>
                        <Link href='contact'>
                            <button className={`btn ${styles.btnFooter}`}>Связаться по доставке</button>
                        </Link>
                    </div>
                    </> : null
                }
            </div>
        </footer>
    </div>
}

export default observer(CalculationPage)