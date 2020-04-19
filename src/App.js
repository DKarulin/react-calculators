import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ContentContainer from "./components/Сalculator/ContentContainer";
import {Route} from "react-router-dom";
import CurrencyContainer from "./components/Currency/CurrencyContainer";
import CurrencyList from "./components/ListOfCurrencies/CurrencyList";

class App extends React.Component {
    render() {
        return (
            <div className='app-wrapper'>
                <div className={'header'}>
                    <Navbar/>
                </div>
                <div className={'app-wrapper-content'}>
                    <Route exact path='/' render={() => <ContentContainer/>}/>
                    <Route path='/currency' render={() => <CurrencyContainer/>}/>
                    <Route path='/currencylist' render={()=><CurrencyList/>}/>
                </div>
            </div>
        )
    }

}

export default App;
