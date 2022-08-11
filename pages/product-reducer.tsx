const SET_ONE_ITEM_CNT_INPT_VL: string = 'SET_ONE_ITEM_CNT_INPT_VL'
const SET_TOTAL_VOLUME_M3_INPT_VL: string = 'SET_TOTAL_VOLUME_M3_INPT_VL'
const SET_TOTAL_NETTO_KG_INPT_VL: string = 'SET_TOTAL_NETTO_KG_INPT_VL'
const SET_TOTAL_BRUTTO_KG_INPT_VL: string = 'SET_TOTAL_BRUTTO_KG_INPT_VL'
const SET_SEARCH_INPT_VL: string = 'SET_SEARCH_INPT_VL'
const SET_SELECTED_ITEM: string = 'SET_SELECTED_ITEM'
const UNSET_SELECTED_ITEM: string = 'UNSET_SELECTED_ITEM'


interface IProductState {
    oneItemInptVl: string,
    totlVlmInptVl: string,
    totlNettoVl: string,
    totlBruttoVl: string,
    searchInptVl: string,
    selectedItem: any
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
    searchInptVl: '',
    selectedItem: null
}

export const setOneItemInptVlAC = (newVlue: string) : IAction => ({ type: SET_ONE_ITEM_CNT_INPT_VL, confDt: newVlue })
export const setTotlVlmInptVlAC = (newVlue: string) : IAction => ({ type: SET_TOTAL_VOLUME_M3_INPT_VL, confDt: newVlue })
export const setTotlNettoVlAC = (newVlue: string) : IAction => ({ type: SET_TOTAL_NETTO_KG_INPT_VL, confDt: newVlue })
export const setTotlBruttoVlAC = (newVlue: string) : IAction => ({ type: SET_TOTAL_BRUTTO_KG_INPT_VL, confDt: newVlue })
export const setSearchInptVlAC = (newVlue: string) : IAction => ({ type: SET_SEARCH_INPT_VL, confDt: newVlue })
export const setSelectedItem = (newVlue: any) : IAction => ({ type: SET_SELECTED_ITEM, confDt: newVlue })
export const unsetSelectedItem = () : IAction => ({ type : UNSET_SELECTED_ITEM })

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
        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.confDt
            }
        case UNSET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: null
            }
        default:
            throw new Error()
    }
}