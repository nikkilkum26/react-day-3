import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            timer: 10
        }
    }

    timeCounter = () => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer - 1 }))
        }, 1000)
    }

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.interval);
            alert("TimeOut!")
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }




    render() {
        let {timer} = this.state;
        return (
            <div>
                <h1>Timer</h1>
                <h2>{timer}</h2>
                <button class="timer btn btn-light" onClick= {this.timeCounter} >Click timer</button>

            </div>
        )
    }
}

export default Timer
