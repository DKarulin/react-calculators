const SET_VALUTE = 'SET_VALUTE'


const initialState = {
    Valute: null,
    Flag: false,

}

export const currencyListReducer = (state = initialState, action) => {
    switch (action.type) {
        case   SET_VALUTE:
            return {
                ...state,
                Valute: action.payload,
                Flag: true


            }
        default:
            return state
    }
}

export const setValute = (value) => {
    return (dispatch) => {
        dispatch({
            type: SET_VALUTE,
            payload: value,
        })
    }
}