import { makeObservable, observable, action, computed } from "mobx"

import { ICalcObj } from "./store-types"

class Store {

    constructor () {
        makeObservable(this, {
            _calcObj: observable,
            _cities: observable,
            cities: computed,
            gCalcObj: computed,
            sCalcObj: action
        })
    }

    _calcObj: ICalcObj | null = null

    _cities: string[] = []

    get cities () { return this._cities }

    get gCalcObj () : ICalcObj | null { return this._calcObj }

    set sCalcObj (nwCalcObj : ICalcObj | null) { this._calcObj = nwCalcObj }

}

export default Store