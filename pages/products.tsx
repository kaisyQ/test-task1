import { NextPage } from "next";
import styles from './products.module.css'

import CatalogueItem from "../components/CatalogueItem/CatalogueItem";
import { useState } from "react";

const ProductsPage: NextPage = () => {
    const [counter, setCounter] = useState(1)
    
    return <div className={styles.products}>
        <div className={styles.productsItem}>
            <h2 className={styles.productsTitle}>Выберите мебель, которую нужно перевезти</h2>
            <div className={styles.productsSearch}>
                <input type="text" placeholder="Введите название"/>
                <button className="btn">Поиск</button>
            </div>  
            <div className={styles.catalogue}>
                <CatalogueItem isChosen={false} name="Диван-кровать, раскладывается"/>
                <CatalogueItem isChosen={false} name="Диван-кровать, раскладывается"/>
                <CatalogueItem isChosen={false} name="Диван-кровать, раскладывается"/>
                <CatalogueItem isChosen={false} name="Диван-кровать, раскладывается"/>
                <CatalogueItem isChosen={false} name="Диван-кровать, раскладывается"/>
            </div>
        </div>
        <div className={styles.productsItem}>
            <h2 className={styles.productsTitle}>Затем заполните следующие поля выбранного элемента:</h2>
                <CatalogueItem isChosen={true} name="Диван-кровать, раскладывается"/>
                <form className={styles.productsForm}>
                    <div className={styles.formGroup}>
                        <span>Кол-во:</span>
                        <div className={styles.countSelector}>
                            <button>-</button>
                            <div>{ counter }</div>
                            <button>+</button>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <input placeholder="Общий объем, м^3" type="text" className={styles.formControl}/>
                    </div>
                    <div className={styles.formGroup}>
                        <input placeholder="Общая масса нетто, кг"type="text" className={styles.formControl}/>
                    </div>
                    <div className={styles.formGroup}>
                        <input placeholder="Общая масса брутто, кг" type="text" className={styles.formControl}/>
                    </div>
                    <div className={styles.formGroup}>
                        <input placeholder="Стоимость одной единицы" type="text" className={styles.formControl}/>
                    </div>
                    <div className={styles.formFooter}>
                        <button className={`btn ${styles.btnForm}`}>Сбросить</button>
                        <button className={`btn ${styles.btnForm}`}>Добавить</button>
                    </div>
                </form>
        </div>
    </div>
}

export default ProductsPage