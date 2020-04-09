import React from "react";
import classes from "../Content.modules.css";


export const Buttons = (props) => {


    return (
        <div className='btndr mt-2' style={classes.btndr}>
            <div className={'row'}>
                <div className={'col-sm-3'}>
                    <button type="button" className="btn btn-info btn-lg btn-block"
                            onClick={props.btn(`${props.num1}`)}>{props.num1}</button>
                </div>
                <div className={'col-sm-3'}>
                    <button type="button" className="btn btn-info btn-lg btn-block"
                            onClick={props.btn(`${props.num2}`)}>{props.num2}</button>
                </div>
                {
                    props.num3 === 'C' ? <div className={'col-sm-3'}>
                                                 <button type="button" className="btn btn-danger btn-lg btn-block"
                                                     onClick={props.cleanInput}>{props.num3}
                                                 </button>
                                        </div> :
                                        <div className={'col-sm-3'}>
                                                <button type="button" className="btn btn-info btn-lg btn-block"
                                                        onClick={props.btn(`${props.num3}`)}>{props.num3}</button>
                                        </div>
                }
                <div className={'col-sm-3'}>
                    <button type="button" className="btn btn-secondary btn-lg btn-block"
                            onClick={props.btn(`${props.num4}`)}>{props.num4}</button>
                </div>

                { props.num5 ? <div className={'col-sm-3 mt-2 offset-9'}>
                        <button type="button" className="btn btn-warning btn-lg btn-block" onClick={props.num5}>=</button>
                </div> : <div></div>}

            </div>
        </div>
    )
}