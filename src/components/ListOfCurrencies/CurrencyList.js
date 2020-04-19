import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {setValute} from "../../redux/reducers/currencyListReducer";
import classes from "./CurrencyList.module.css"

const CurrencyList = (props) => {
    async function fetchData() {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(res => res.json())
            .then(
                (result) => {
                    props.setValute(result.Valute)
                }
            )
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={classes.divStyle}>
            <div className='container' style={{color: 'white', fontSize: '15pt'}}>
                <div className='row border-bottom border-warning' style={{color: 'gold'}}>
                    <div className='col-sm-4 mt-4 mb-4'>
                        <h4> Наименование валюты</h4>
                    </div>
                    <div className='col-sm-4 mt-4 mb-4'>
                        <h4>Буквенный код</h4>
                    </div>
                    <div className='col-sm-4 mt-4 mb-4'>
                        <h4>Курс</h4>
                    </div>
                </div>
                {props.Flag ? Object.keys(props.Valute).map((item) =>
                    <div className='row border-bottom border-info' key={props.Valute[item].ID}>
                        <div className='col-sm-4 mt-4 mb-4'>
                            {props.Valute[item].Name}

                        </div>
                        <div className='col-sm-4 mt-4 mb-4'>
                            {props.Valute[item].CharCode}
                        </div>
                        <div className='col-sm-4 mt-4 mb-4'>
                            {props.Valute[item].Value}
                        </div>

                    </div>) : <div className="spinner-border"/>}
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        Valute: store.currencyList.Valute,
        Flag: store.currencyList.Flag,
    }
}

const mapDispatchToProps = dispatch => ({
    setValute: (value) => dispatch(setValute(value)),


})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList)