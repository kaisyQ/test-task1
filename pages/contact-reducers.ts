const SET_NAME_INPT_VL: string = 'SET_NAME_INPT_VL'
const SET_EMAIL_INPT_VL: string = 'SET_EMAIL_INPT_VL'
const SET_PHONE_INPT_VL: string = 'SET_PHONE_INPT_VL'
const SET_PROBLEM_TA_VL: string = 'SET_PROBLEM_TA_VL'

interface IAction {
    type: string,
    confDt?: any 
}


interface IContactState {
    name: string,
    email: string,
    phone: string,
    problem: string
}

export const initalState = {
    name: '',
    email: '',
    phone: '',
    problem: ''
}

export const setNameInptAC = (nameInptVl: string) : IAction => ({ type: SET_NAME_INPT_VL, confDt: nameInptVl })
export const setEmailInptAC = (emailInptVl: string) : IAction => ({ type: SET_EMAIL_INPT_VL, confDt: emailInptVl })
export const setPhoneInptAC = (phoneInptVl: string) : IAction => ({ type: SET_PHONE_INPT_VL, confDt: phoneInptVl })
export const setProblemTaAC = (newTaVl: string) : IAction => ({ type: SET_PROBLEM_TA_VL, confDt: newTaVl })


export function contactReducer (state: IContactState, action: IAction) {
    switch (action.type) {
        case SET_NAME_INPT_VL:
            return {
                ...state,
                name: action.confDt
            }
        case SET_EMAIL_INPT_VL:
            return {
                ...state,
                email: action.confDt
            }
        case SET_PHONE_INPT_VL:
            return {
                ...state,
                phone: action.confDt
            }
        case SET_PROBLEM_TA_VL: 
            return {
                ...state,
                problem: action.confDt
            }
        default : 
            throw new Error() 
    }
}