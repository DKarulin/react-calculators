import React from "react";
import Currency from "./Currency";
import {connect} from "react-redux";
import {setDataVal} from "../../redux/reducers/currencyReducers";


class CurrencyContainer extends React.Component {
    componentDidMount() {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.setDataVal(result.Valute.USD, result.Valute.EUR)
                }
            )
    }

    render() {
        return (
            <div>
                <Currency choiceVal={this.props.currency}/>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        currency: store.currency
    }
}
const mapDispatchToProps = dispatch => ({
    setDataVal: (valueUSD, valueEUR) => dispatch(setDataVal(valueUSD, valueEUR)),


})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer)