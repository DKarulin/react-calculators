import React from "react";
import classes from "./Content.modules.css"
import {Buttons} from "./Button/Button";


const Content = (props) => {

    return (
        <div className={'container cont'} style={classes.cont}>
            <div>
                <div className="input mb-3 cont">
                    <input type="text" className="form-control" value={props.dataState} aria-label="Username"
                           aria-describedby="basic-addon1" />
                </div>
                <Buttons btn={props.btn} num1={1} num2={2} num3={3} num4={'+'}/>
                <Buttons btn={props.btn} num1={4} num2={5} num3={6} num4={'-'}/>
                <Buttons btn={props.btn} num1={7} num2={8} num3={9} num4={'*'}/>
                <Buttons btn={props.btn} num1={','} num2={0} num3={'C'} num4={'/'} cleanInput={props.cleanInput} num5={props.sumNumbers}/>


            </div>
        </div>

    )
}

export default Content