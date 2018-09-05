import React, { Component } from 'react'
import dateFormat from 'dateformat'




class Timer extends React.Component {
    
    constructor(props) {
        super(props)
        let dateClose = new Date(this.props.close)
        let now = this.props.open
        let dateOpen = dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
        this.state = { seconds: dateOpen}
    }
  
    tick() {
        // var seconds = date.getTime() / 1000; //1440516958
       
        this.setState(prevState => ({
            seconds: prevState.seconds - 1
        }))
        
        
    }
  
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }
  
    componentWillUnmount() {
        clearInterval(this.interval)
    }
  
    render() {
        
        console.log(this.state.seconds)
        // console.log(dateFormat(new Date(), 'dddd, mmmm dS, yyyy, h:MM:ss TT'))
        
        return (
            <div>
          Seconds: {this.state.seconds}
            </div>
        )
    }
}
  
export default Timer