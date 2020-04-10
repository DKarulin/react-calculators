const SET_VALUE_SALE = 'SET_VALUE_SALE'
const SET_VALUE_BUY = 'SET_VALUE_BUY'
const SET_TEXT_AREA_VAL = 'SET_TEXT_AREA_VAL'


const initialState = {
    nameСurrencySale: 'RUB',
    nameСurrencyBuy: 'USD',
    countSale: false,
    countBuy: false,
    valSale: '',
    valBuy: '',
    TextAreaVal: '0000',
    convertTextAreaVal: '0001',

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
