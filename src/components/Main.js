import React, {Component, useState } from "react";
import axios from 'axios';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            word: '',
        }
    }

    componentDidMount() {
        axios.get(`https://api.developerforfun.com/hello-world`)
            .then(res => {
                this.setState(
                    {
                        word: res.data
                    }
                )
            })
    }


    render() {
        const {word} = this.state;
        return (
            <div>
                Yo, Main, {word}
            </div>
        )
    }
}

export default Main;