const SET_ONE_ITEM_CNT_INPT_VL: string = 'SET_ONE_ITEM_CNT_INPT_VL'
const SET_TOTAL_VOLUME_M3_INPT_VL: string = 'SET_TOTAL_VOLUME_M3_INPT_VL'
const SET_TOTAL_NETTO_KG_INPT_VL: string = 'SET_TOTAL_NETTO_KG_INPT_VL'
const SET_TOTAL_BRUTTO_KG_INPT_VL: string = 'SET_TOTAL_BRUTTO_KG_INPT_VL'
const SET_SEARCH_INPT_VL = 'SET_SEARCH_INPT_VL'

interface IProductState {
    oneItemInptVl: string,
    totlVlmInptVl: string,
    totlNettoVl: string,
    totlBruttoVl: string,
    searchInptVl: string
}

interface IAction {
    type: string,
    confDt?: any 
}
export const initalState = {
    oneItemInptVl: '',
    totlVlmInptVl: '',
    totlNettoVl: '',
    totlBruttoVl: '',
    searchInptVl: ''
}

export const setOneItemInptVlAC = (newVlue: string) : IAction => ({ type: SET_ONE_ITEM_CNT_INPT_VL, confDt:newVlue })
export const setTotlVlmInptVlAC = (newVlue: string) : IAction => ({ type: SET_TOTAL_VOLUME_M3_INPT_VL, confDt:newVlue })
export const setTotlNettoVlAC = (newVlue: string) : IAction => ({ type: SET_TOTAL_NETTO_KG_INPT_VL, confDt:newVlue })
export const setTotlBruttoVlAC = (newVlue: string) : IAction => ({ type: SET_TOTAL_BRUTTO_KG_INPT_VL, confDt:newVlue })
export const setSearchInptVlAC = (newVlue: string) : IAction => ({ type: SET_SEARCH_INPT_VL, confDt:newVlue })


export default function productReducer(state: IProductState, action: IAction) {
    switch(action.type) {
        case SET_ONE_ITEM_CNT_INPT_VL:
            return {
                ...state,
                oneItemInptVl: action.confDt
            }
        case SET_TOTAL_VOLUME_M3_INPT_VL:
            return {
                ...state,
                totlVlmInptVl: action.confDt
            }
        case SET_TOTAL_NETTO_KG_INPT_VL:
            return {
                ...state,
                totlNettoVl: action.confDt
            }
        case SET_TOTAL_BRUTTO_KG_INPT_VL:
            return {
                ...state,
                totlBruttoVl: action.confDt
            }
        case SET_SEARCH_INPT_VL:
            return {
                ...state,
                searchInptVl: action.confDt
            }
        default:
            throw new Error()
    }
}