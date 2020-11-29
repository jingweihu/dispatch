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
        axios.get(`http://ec2-18-218-159-185.us-east-2.compute.amazonaws.com:8080/hello-world`)
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
                Main, {word}
            </div>
        )
    }
}

export default Main;