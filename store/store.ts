import { makeObservable, observable, computed } from "mobx"

import { ICalcObj, ICurrencyType, ISelectedItem } from "./store-types"

class Store {

    constructor () {
        makeObservable(this, {
            _calcObj: observable,
            _cities: observable,
            _selectedItems: observable,
            _savedCalculations: observable,
            _chineseCities: observable,
            _currencies: observable,
            _items: observable,
            cities: computed,
            calcObj: computed,
            currencies: computed,
            chineseCities: computed,
            problems: computed,
            items: computed,
            selectedItems: computed,
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

    _savedCalculations: number[] = []

    get cities () { return this._cities }

    get calcObj () : ICalcObj | null { return this._calcObj }

    get currencies () { return this._currencies }

    get chineseCities () { return this._chineseCities }

    get problems () { return this._problems }

    get items () { return this._items }

    get selectedItems () { return this._selectedItems }

    set calcObj(calcObj : ICalcObj | null) { this._calcObj = calcObj }

    clearSelectedItems() { this._selectedItems = [] }

    addProblem (newProblem: string) : void { this._problems.push(newProblem) }

    addSelectedItem(newItem: ISelectedItem) : void { this._selectedItems.push(newItem) }

    getTotalSelectVls () { 
        const totalSelectVls = {
            totlVlmtVl: 0,
            totlBruttoVl: 0,
            totlNettoVl: 0,
            oneItemVl: 0,
            count: 0
        }
        this._selectedItems.map((item : ISelectedItem) => {
            totalSelectVls.totlBruttoVl += item.totlBruttoVl
            totalSelectVls.count += item.count
            totalSelectVls.oneItemVl += item.oneItemVl
            totalSelectVls.totlNettoVl += item.totlNettoVl
            totalSelectVls.totlVlmtVl += item.totlVlmInptVl
        })
        return totalSelectVls
    }

    isItemArrEmpty () : boolean { return this._selectedItems.length === 0 }

    addCalculation (newCalc : number) : void { this._savedCalculations.push(newCalc) }
}

export default Store