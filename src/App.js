import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ContentContainer from "./components/Content/ContentContainer";
import {Route} from "react-router-dom";
import CurrencyContainer from "./components/Currency/CurrencyContainer";

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
                </div>

            </div>

        )
    }

}

export default App;
