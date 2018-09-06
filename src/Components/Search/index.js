import React from 'react'
import { Input } from 'reactstrap'
import axios from 'axios'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

class Search extends React.Component{
   state = {
       search : ''
   }

   handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
    request.get (`/auctions/search`,{
        params:{
            q: event.target.value
        }
    })
    .then(response => {
        this.props.updateList(response.data)
        // console.log('Data', response.data)
    })
}

    render(){
        return(
            <div>
                <Input 
                type="search" 
                name="search" 
                id="search" 
                placeholder="Search Auction" 
                onChange={this.handleChange} />
            </div>
        )
    }
}

export default Search