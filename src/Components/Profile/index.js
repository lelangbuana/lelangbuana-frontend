import React, { Component } from 'react'
import { Media, ListGroup, ListGroupItem, Button } from 'reactstrap'
import axios from 'axios'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            phone_number: '',
            profile_photo: ''

        }
    }

    componentDidMount(){
        request
            .get(`/users/id/${localStorage.getItem('user_id')}`)
            .then((response) => {return response})
            .then(data => {
                console.log('PROFILE DATA: ',data)

                this.setState({
                    username: data.data.user.username,
                    phone_number: data.data.user.phone_number,
                    profile_photo: data.data.user.profile_photo
                })
                
                // this.setState(prevState => {
                //     console.log(prevState.myBids)
                
                //     return {
                //         myBids: prevState.myBids.concat({
                //             bids_nominal: item.bids_nominal,
                //             created_at: item.created_at,
                //             auction_id: item.auction_id,
                //             user_id: item.user_id,
                //             title: data.title,
                //             username: username
                //         })
                //     }
                // })
            })
            .catch(error=>{console.log(error)})
                                
                            
    }

    render(){
        return (
            <ListGroup>
                <ListGroupItem>
                    <Media>
                        <Media left >
                            <Media object data-src="holder.js/64x64" alt="image" />
                        </Media>
                        <Media body>
                            <Media heading>
                                {this.state.username}
                            </Media>
                            {this.state.phone_number}
                        </Media>
                    </Media>
                    
                </ListGroupItem>
                <Button color="warning"> Create An Auction</Button>
                <ListGroupItem tag="a" href="" action>Home</ListGroupItem>
                <ListGroupItem tag="a" href="" action>My Bid</ListGroupItem>
                <ListGroupItem tag="a" href="" action>My Auction</ListGroupItem>
                <ListGroupItem tag="a" href="" action>Setting Profile</ListGroupItem>
                <ListGroupItem tag="a" href="" action>Logout</ListGroupItem>
            </ListGroup>
        )
    }
}
export default Profile