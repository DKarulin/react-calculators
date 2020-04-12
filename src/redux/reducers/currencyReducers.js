const SET_VALUE_SALE = 'SET_VALUE_SALE'
const SET_VALUE_BUY = 'SET_VALUE_BUY'
const SET_TEXT_AREA_VAL = 'SET_TEXT_AREA_VAL'
const SET_CONVERT_TEAXTAREA_VAL = 'SET_CONVERT_TEAXTAREA_VAL'
const SET_DATA_VAL = 'SET_DATA_VAL'
const FLAG_NUMBER_TRUE = 'FLAG_NUMBER_TRUE'
const FLAG_NUMBER_FALSE = 'FLAG_NUMBER_FALSE'


const initialState = {
    nameСurrencySale: '',
    nameСurrencyBuy: '',
    countSale: false,
    countBuy: false,
    valSale: '',
    valBuy: '',
    TextAreaVal: '',
    convertTextAreaVal: '',
    valueUSD: {},
    valueEUR: {},
    isNumber: 0,

}

export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case   SET_VALUE_SALE:
            return {
                ...state,
                nameСurrencySale: action.payload,
                countSale: true,

            }
        case SET_VALUE_BUY:
            return {
                ...state,
                nameСurrencyBuy: action.payload,
                countBuy: true,
            }
        case SET_TEXT_AREA_VAL:
            return {
                ...state,
                TextAreaVal: action.payload,
            }
        case SET_CONVERT_TEAXTAREA_VAL:
            return {
                ...state,
                convertTextAreaVal: action.payload,
            }
        case FLAG_NUMBER_TRUE:
            return {
                ...state,
                isNumber: true
            }
        case FLAG_NUMBER_FALSE:
            return {
                ...state,
                isNumber: false
            }
        case SET_DATA_VAL:
            return {
                ...state,
                valueUSD: action.valueUSD,
                valueEUR: action.valueEUR
            }
        default:
            return state
    }
}

export const setCurrency = (currency, val) => {
    if (val === 1) {
        return {
            type: SET_VALUE_SALE,
            payload: currency,

        }
    } else {
        return {
            type: SET_VALUE_BUY,
            payload: currency
        }
    }
}
export const setTextAreaVal = (textAreaVal, val) => {
    if (val === 1) {
        return {
            type: SET_TEXT_AREA_VAL,
            payload: textAreaVal,

        }
    }
}

export const setConvertTextAreaVal = (convertTextAreaVal) => {
    return {
        type: SET_CONVERT_TEAXTAREA_VAL,
        payload: convertTextAreaVal
    }
}
export const flagNumber = (val = 0) => {
    if (val === 1) {
        return {
            type: FLAG_NUMBER_TRUE
        }
    } else {
        return {
            type: FLAG_NUMBER_FALSE

        }
    }
}
export const setDataVal = (valueUSD, valueEUR) => {
    return (dispatch) => {
        dispatch({
            type: SET_DATA_VAL,
            valueUSD: valueUSD,
            valueEUR: valueEUR
        })
    }
}