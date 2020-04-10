import React from "react";

const ContentCurrency = (props)=>{
    const ac = 1
    const btnCl = (e) =>{
        const year = e.currentTarget.innerText
        return alert(year)
    }
    return(
            <div className='col-sm-6'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <button type="button" className="btn btn-info btn-lg btn-block" onClick={btnCl}>RUB</button>
                    </div>
                    <div className='col-sm-4'>
                        <button type="button" className="btn btn-info btn-lg btn-block" onClick={btnCl}>USD</button>
                    </div>
                    <div className='col-sm-4'>
                        <button type="button" className="btn btn-info btn-lg btn-block" onClick={btnCl}>EUR</button>
                    </div>
                    {
                        ac ? <div className='col-sm-12 mt-2' style={{fontFamily: 'inherit', color:'white'}}>Вы выбрали {props.choiceVal}</div>:<div></div>
                    }
                    <div className='col-sm-12'>
                        <textarea className="form-control mt-3" maxLength={10} style={{ width: '100%', height:'100px', resize: 'none'}}/>
                    </div>
                </div>
            </div>
    )

}
export default ContentCurrency