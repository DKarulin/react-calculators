import React from "react";
import ContentCurrency from "./ContentCurrency/ContentCurrency";
import {connect} from "react-redux";
import {getPhotos, setYear} from "../../redux/reducers/testREdusers";

const Currency = (props) => {
    // const btnCl = (e) =>{
    //     const year = +e.currentTarget.innerText
    //     props.setYearAction(year)
    // }
    return (
        <div className='container'>
            <div className='row mb-2'>
                <div className='col-sm-6'>
                    <div style={{fontFamily: 'inherit', color:'white'}}>Хочу перевести</div>
                </div>
                <div className='col-sm-6'>
                    <div style={{fontFamily: 'inherit', color:'white'}}>Хочу преобрести</div>
                </div>
            </div>
            <div className='row'>
                <ContentCurrency choiceVal={props.choiceVal.nameСurrencySale}/>
                <ContentCurrency choiceVal={props.choiceVal.nameСurrencyBuy}/>
            </div>
            {/*{props.isFetching ? <p>Загрузка...</p> : <h1>{props.user.year}</h1>}*/}
            {/*<button onClick={btnCl}>2100</button>*/}
            {/*<button onClick={btnCl}>2000</button>*/}
        </div>
    )
}
const mapStateToProps = store =>{
    return{
        user: store.page
    }
}
const mapDispatchToProps = dispatch => ({

        setYearAction: year => dispatch(getPhotos(year))

})

export default connect(mapStateToProps, mapDispatchToProps)(Currency)
