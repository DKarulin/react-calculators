import React from "react";
import {connect} from "react-redux";
import {setCurrency, setTextAreaVal} from "../../../redux/reducers/currencyReducers";

const ContentCurrency = (props)=>{
    const outputScreenVal = (e, val=props.name) =>{
        const currency = e.currentTarget.innerText
        props.setCurrancy(currency, val)
    }
    const textAreaVal = (e, val=props.name)=>{
        const textAreaVal = e.target.value
        props.setTextAreaVal(textAreaVal, val)
    }
    return(
            <div className='col-sm-6'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <button type="button" className="btn btn-info btn-lg btn-block" onClick={outputScreenVal}>RUB</button>
                    </div>
                    <div className='col-sm-4'>
                        <button type="button" className="btn btn-info btn-lg btn-block" onClick={outputScreenVal}>USD</button>
                    </div>
                    <div className='col-sm-4'>
                        <button type="button" className="btn btn-info btn-lg btn-block" onClick={outputScreenVal}>EUR</button>
                    </div>
                    {
                        props.countChoiсe ? <div className='col-sm-12 mt-2' style={{fontFamily: 'inherit', color:'white'}}>Вы выбрали {props.choiceVal}</div>:<div></div>
                    }
                    {
                        props.name === 1?<div className='col-sm-12'>
                            <textarea className="form-control mt-3" onChange={textAreaVal} maxLength={10}  style={{ width: '100%', height:'100px', resize: 'none'}}/>
                        </div>:<div className='col-sm-12'>
                            <textarea className="form-control mt-3" value={props.convertTextAreaVal} maxLength={10}  style={{ width: '100%', height:'100px', resize: 'none'}}/>
                        </div>
                    }
                </div>
            </div>
    )

}

const mapDispatchToProps = dispatch => ({
    setCurrancy: (currency, val) => dispatch(setCurrency(currency, val)),
    setTextAreaVal:(textAreaVal, val)=>dispatch(setTextAreaVal(textAreaVal, val))

})

export default connect(null, mapDispatchToProps)(ContentCurrency)