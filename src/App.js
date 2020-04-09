import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import ContentContainer from "./components/Content/ContentContainer";

class App extends React.Component {
    render() {
        return (
            <div className='app-wrapper'>
                <div className={'header'}>
                    <Navbar/>
                </div>
                <div className={'app-wrapper-content'}>
                      <ContentContainer/>
                </div>

            </div>

        )
    }

}

export default App;
