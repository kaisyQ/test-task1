import { makeObservable, observable, action, computed } from "mobx"

import { ICalcObj, ICurrencyType } from "./store-types"

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

    get cities () { return this._cities }

    get calcObj () : ICalcObj | null { return this._calcObj }

    get currencies () { return this._currencies }

    get chineseCities () { return this._chineseCities }

}

export default Store