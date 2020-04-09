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
        for (let i = 0; i<str.length; i++){
            if (str[i] === '+'){
                const separators = ['\\\+', '-','\\*', '/']
                let arr = this.state.dataState.split(new RegExp(separators.join('|'), 'g'))
                let number_arr = arr.map(string => +string)
                let result = number_arr.reduce((sum, current) => sum + current)
                return this.setState({dataState:  result})
            }else if (str[i] === '-'){
                const separators = ['\\\+', '-','\\*', '/']
                let arr = this.state.dataState.split(new RegExp(separators.join('|'), 'g'))
                let number_arr = arr.map(string => +string)
                let result = number_arr.reduce((sum, current) => sum - current)
                return this.setState({dataState:  result})
            }else if (str[i] === '*'){
                const separators = ['\\\+', '-','\\*', '/']
                let arr = this.state.dataState.split(new RegExp(separators.join('|'), 'g'))
                let number_arr = arr.map(string => +string)
                let result = number_arr.reduce((sum, current) => sum * current)
                return this.setState({dataState:  result})
            }else if (str[i] === '/'){
                const separators = ['\\\+', '-','\\*', '/']
                let arr = this.state.dataState.split(new RegExp(separators.join('|'), 'g'))
                let number_arr = arr.map(string => +string)
                let result = number_arr.reduce((sum, current) => sum / current)
                return this.setState({dataState:  result})
            }
        }
        // const separators = ['\\\+', '-','\\*', '/']
        // let arr = this.state.dataState.split(new RegExp(separators.join('|'), 'g'))
        // let number_arr = arr.map(string => +string)
        // let result = number_arr.reduce((sum, current) => sum + current)
        // alert(result)

        // let arr_0 = this.state.dataState.split('+')
        // arr_0.forEach((item, index, arr_0) => {
        //     if (item === '+'){
        //         alert('+')
        //     }
        // })


    }


    // sumNumbers = () => {
    //     let str = this.state.dataState
    //    // let sum = 0
    //     let pos = -1;
    //     let mas = []
    //     while ((pos = str.indexOf('+', pos + 1)) != -1) {
    //         alert(`pos ${pos}`)
    //         mas.push(pos)
    //         alert(`mas ${mas}`)
    //     }
    // }

    // sumNumbers = () => {
    //     let str = this.state.dataState
    //     let sum = 0
    //     for (let i = 0; i < str.length; i++) {
    //         if (!isNaN(parseInt(str[i]))) {
    //             sum += parseInt(str[i])
    //
    //         }
    //     }
    //     return this.setState({dataState: sum})
    // }

    render() {
        return (
            <Content dataState={this.state.dataState} cleanInput={this.cleanInput} btn={this.btn}
                     sumNumbers={this.sumNumbers}/>

        )
    }
}

export default ContentContainer