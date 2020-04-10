import React from "react";
import Currency from "./Currency";
import {connect} from "react-redux";

class CurrencyContainer extends React.Component{
    render() {
        return(
            <Currency choiceVal={this.props.currency}/>
            )
    }
}


const mapStateToProps = (store) => {
    return {
        currency: store.currency
    }
}

export default connect(mapStateToProps)(CurrencyContainer)