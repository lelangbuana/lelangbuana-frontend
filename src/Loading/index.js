import React,{Component} from 'react'
import Loader from '../Components/Assets/loader.gif'

class Loading extends Component {
    render(){
        return  <img src={Loader} alt="loading..." /> 
    }
}

export default Loading