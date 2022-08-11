export interface ICalcObj {
    from: string,
    to: string,
    currency: string
}

export interface ICurrencyType {
    name: string,
    value: string
}

export interface ISelectedItem {
    itemName: string,
    totlVlmInptVl: number,
    totlBruttoVl: number,
    totlNettoVl: number,
    oneItemVl: number
}