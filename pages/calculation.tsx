import { NextPage } from "next";
import Preloader from "../components/Preloader/Preloader";
import styles from './calculation.module.css'
import TableItem from "../components/TableItem/TableItem";

const CalculationPage: NextPage = (props: any) => {
    return <div className={styles.addedFurniture}>
        <div className={styles.tableScroll}>
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
                <TableItem 
                        name="Диван-кровать, раскладывается"
                        count={1}
                        nettoCnt={23}
                        bruttoCnt={26}
                        vlm={2}
                        price={25000}
                    />
                    <TableItem 
                        name="Диван-кровать, раскладывается"
                        count={1}
                        nettoCnt={23}
                        bruttoCnt={26}
                        vlm={2}
                        price={25000}
                    />
                    <TableItem 
                        name="Диван-кровать, раскладывается"
                        count={1}
                        nettoCnt={23}
                        bruttoCnt={26}
                        vlm={2}
                        price={25000}
                    />
                    <TableItem 
                        name="Диван-кровать, раскладывается"
                        count={1}
                        nettoCnt={23}
                        bruttoCnt={26}
                        vlm={2}
                        price={25000}
                    />
                    <TableItem 
                        name="Диван-кровать, раскладывается"
                        count={1}
                        nettoCnt={23}
                        bruttoCnt={26}
                        vlm={2}
                        price={25000}
                    />
                    <TableItem 
                        name="Диван-кровать, раскладывается"
                        count={1}
                        nettoCnt={23}
                        bruttoCnt={26}
                        vlm={2}
                        price={25000}
                    />
                    <TableItem 
                        name="Диван-кровать, раскладывается"
                        count={1}
                        nettoCnt={23}
                        bruttoCnt={26}
                        vlm={2}
                        price={25000}
                    />
                </tbody>
                <tfoot>
                    <tr>
                        <td className={styles.transparent}></td>
                        <td className={styles.visible}>Итого:</td>
                        <td className={styles.visible}>1</td>
                        <td className={styles.visible}>161</td>
                        <td className={styles.visible}>182</td>
                        <td className={styles.visible}>175</td>
                        <td className={styles.visible}>175000 руб.</td>
                        <td className={styles.visible}>Сбросить</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <footer className={styles.footer}>
            <div className={styles.tableControls}>
                <div className={styles.controlsItem}>
                    <button className={`btn ${styles.btnFooter}`}>Добавить +</button>
                    <button className={`btn ${styles.btnFooter}`}>Рассчитать</button>
                </div>
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
                    <button className={`btn ${styles.btnFooter}`}>Сохранить расчет &darr;</button>
                    <button className={`btn ${styles.btnFooter}`}>Связаться по доставке</button>
                </div>
            </div>
        </footer>
    </div>
}

export default CalculationPage