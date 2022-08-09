const SET_INPT_VL: string = 'SET_INPT_VALUE'
const SET_VLT_VL: string = 'SET_VLT_VL' 
const SET_CITY_TO_VL: string = 'SET_CITY_TO_VL'

export interface IDelivetyType {
    tmpInputValue: string,
    vltValue: string,
    cityTo: string
}

interface IIndexAction {
    type: string,
    confDt: any
}

export const setInptVlAC = (inptValue: string) : IIndexAction => ( { type: SET_INPT_VL, confDt: inptValue } )
export const setVltAC = (vltValue: string) : IIndexAction => ( { type: SET_VLT_VL, confDt: vltValue } )
export const setCityToAC = (cityToValue: string) : IIndexAction => ( { type: SET_CITY_TO_VL, confDt: cityToValue } )

export const initialState = {
    tmpInputValue: '',
    vltValue: 'USD',
    cityTo: 'Москва'
}

export default function indexReducer (state: IDelivetyType, action: IIndexAction) {
    switch(action.type) {
        case SET_INPT_VL :
            return {
                ...state,
                tmpInputValue: action.confDt
            }
        case SET_VLT_VL :
            return {
                ...state,
                vltValue: action.confDt
            }
        case SET_CITY_TO_VL :
            return {
                ...state,
                cityTo: action.confDt
            }
        default :
            throw new Error()
    }
}