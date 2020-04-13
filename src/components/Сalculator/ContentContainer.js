import React from "react";
import Content from "./Content";


class ContentContainer extends React.Component {
    constructor() {
        super();
        this.sumNumbers = this.sumNumbers.bind(this)
        this.cleanInput = this.cleanInput.bind(this)
        this.btn = this.btn.bind(this)
        this.state = {
            dataState: '',
        }
    }

    btn(value) {
        return () => {
            return this.setState({dataState: this.state.dataState + value})
        }
    }

    cleanInput() {
        return this.setState({dataState: ''})
    }

    sumNumbers = () => {
        const str = this.state.dataState
        const separators = ['\\+', '-', '\\*', '/']
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '+') {
                let arr = this.state.dataState.split(new RegExp(separators.join('|'), 'g'))
                let number_arr = arr.map(string => +string)
                let result = number_arr.reduce((sum, current) => sum + current)
                return this.setState({dataState: result})
            } else if (str[i] === '-') {
                let arr = this.state.dataState.split(new RegExp(separators.join('|'), 'g'))
                let number_arr = arr.map(string => +string)
                let result = number_arr.reduce((sum, current) => sum - current)
                return this.setState({dataState: result})
            } else if (str[i] === '*') {
                let arr = this.state.dataState.split(new RegExp(separators.join('|'), 'g'))
                let number_arr = arr.map(string => +string)
                let result = number_arr.reduce((sum, current) => sum * current)
                return this.setState({dataState: result})
            } else if (str[i] === '/') {
                let arr = this.state.dataState.split(new RegExp(separators.join('|'), 'g'))
                let number_arr = arr.map(string => +string)
                let result = number_arr.reduce((sum, current) => sum / current)
                return this.setState({dataState: result})
            }
        }
    }

    render() {
        return (
            <Content dataState={this.state.dataState} cleanInput={this.cleanInput} btn={this.btn}
                     sumNumbers={this.sumNumbers}/>

        )
    }
}

export default ContentContainer