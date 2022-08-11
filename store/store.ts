import { throws } from "assert"
import { makeObservable, observable, action, computed } from "mobx"

import { ICalcObj, ICurrencyType, ISelectedItem } from "./store-types"

class Store {

    constructor () {
        makeObservable(this, {
            _calcObj: observable,
            _cities: observable,
            cities: computed,
            calcObj: computed,
        })
    }

    _calcObj: ICalcObj | null = null

    _cities: string[] = ['Москва', 'Владивосток', 'Самара']

    _chineseCities: string[] = ['Пекин', 'Харбин', 'Гуаньчжоу', 'Тайвань', 'Сучжоу', 'Пинлян']

    _currencies: ICurrencyType[] = [{ name: 'USD', value: '64.54'}, {name: 'RUB', value: '1'}, {name: 'CNY', value: '8.98'}]

    _problems: string[] = []

    _items: string[] = [
        'Диван-кровать, раскладывается',
        'Диван-кровать, раскладывается',
        'Диван-кровать, раскладывается',
        'Диван-кровать, раскладывается',
        'Диван-кровать, раскладывается',
        'Диван-кровать, раскладывается',
        'Телевизор из Тайваня'
    ]

    _selectedItems: ISelectedItem[] = []

    get cities () { return this._cities }

    get calcObj () : ICalcObj | null { return this._calcObj }

    get currencies () { return this._currencies }

    get chineseCities () { return this._chineseCities }

    get problems () { return this._problems }

    get items () { return this._items }

    get selecteditems () { return this._selectedItems }

    set calcObj(calcObj : ICalcObj | null) { this._calcObj = calcObj }

    addProblem (newProblem: string) : void { this._problems.push(newProblem) }

    addSelectedItem(newItem: ISelectedItem) : void { this._selectedItems.push(newItem) }

    isItemArrEmpty () : boolean { return this._selectedItems.length === 0}
}

export default Store