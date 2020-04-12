import React from "react";
import ContentCurrency from "./ContentCurrency/ContentCurrency";
import {connect} from "react-redux";
import {setConvertTextAreaVal} from "../../redux/reducers/currencyReducers";


const Currency = (props) => {
    const textAreaVal2 = () => {
        const nameСurrencySale = props.choiceVal.nameСurrencySale
        const textAreaVal = +props.choiceVal.TextAreaVal
        const nameСurrencyBuy = props.choiceVal.nameСurrencyBuy
        const EUR = +props.choiceVal.valueEUR.Value
        const USD = +props.choiceVal.valueUSD.Value
        const USD_TO_RUB = USD / EUR
        const EUR_TO_RUB = EUR / USD

        if (nameСurrencySale === 'RUB' && nameСurrencyBuy === 'USD') {

            props.setConvertTextAreaVal(textAreaVal / USD)

        } else if (nameСurrencySale === 'RUB' && nameСurrencyBuy === 'EUR') {

            props.setConvertTextAreaVal(textAreaVal / EUR)

        } else if (nameСurrencySale === 'USD' && nameСurrencyBuy === 'EUR') {

            props.setConvertTextAreaVal(textAreaVal * USD_TO_RUB)

        } else if (nameСurrencySale === 'USD' && nameСurrencyBuy === 'RUB') {

            props.setConvertTextAreaVal(textAreaVal * USD)

        } else if (nameСurrencySale === 'EUR' && nameСurrencyBuy === 'USD') {

            props.setConvertTextAreaVal(textAreaVal * EUR_TO_RUB)


        } else if (nameСurrencySale === 'EUR' && nameСurrencyBuy === 'RUB') {

            props.setConvertTextAreaVal(textAreaVal * EUR)

        } else if (nameСurrencySale === nameСurrencyBuy) {

            props.setConvertTextAreaVal(textAreaVal)

        }


    }
    return (
        <div className='container'>
            <div className='row mb-2'>
                <div className='col-sm-6'>
                    <div style={{fontFamily: 'inherit', color: 'white'}}>Хочу перевести</div>
                </div>
                <div className='col-sm-6'>
                    <div style={{fontFamily: 'inherit', color: 'white'}}>Хочу преобрести</div>
                </div>
            </div>
            <div className='row'>
                <ContentCurrency choiceVal={props.choiceVal.nameСurrencySale} name={1} setCurrancy={props}
                                 countChoiсe={props.choiceVal.countSale} TextAreaVal={props.choiceVal.TextAreaVal}/>
                <ContentCurrency choiceVal={props.choiceVal.nameСurrencyBuy} name={2} setCurrancy={props}
                                 countChoiсe={props.choiceVal.countBuy}
                                 convertTextAreaVal={props.choiceVal.convertTextAreaVal}/>
            </div>
            <div className='row mt-3'>
               { props.choiceVal.isNumber ? <div className='col-sm-12'>
                    <div className="alert alert-info" role="alert">
                        <h4>Вводите только <kbd>цифры</kbd> или <kbd>.</kbd> после цифры</h4>
                        <footer className="blockquote-footer">Пример <cite>3.1415</cite></footer>

                    </div>
                </div>:<div></div>
               }
                <div className='col-sm-6'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <button type="button" className="btn btn-warning btn-lg btn-block"
                                    onClick={textAreaVal2}>Перевести
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setConvertTextAreaVal: (convertTextAreaVal) => dispatch(setConvertTextAreaVal(convertTextAreaVal)),
})


export default connect(null, mapDispatchToProps)(Currency)
