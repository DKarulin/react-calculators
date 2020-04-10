import React from "react";
import ContentCurrency from "./ContentCurrency/ContentCurrency";
import {connect} from "react-redux";
import {getPhotos} from "../../redux/reducers/testREdusers";

const Currency = (props) => {
    const textAreaVal2 = ()=>{
        const textAreaVal = +props.choiceVal.TextAreaVal
        alert(textAreaVal*80)
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
                                 countChoiсe={props.choiceVal.countBuy} convertTextAreaVal={props.choiceVal.convertTextAreaVal}/>
            </div>
            <div className='row mt-3'>
                <div className='col-sm-6'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <button type="button" className="btn btn-warning btn-lg btn-block" onClick={textAreaVal2}>Перевести</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default connect(null, null)(Currency)
