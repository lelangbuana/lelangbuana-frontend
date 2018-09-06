import React, { Component } from 'react'
import { Media, ListGroup, ListGroupItem, Button } from 'reactstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 10000,
    headers: { Authorization: '' }
})

const styles = {
    select : {
        margin: '-.75rem -1.25rem',
        padding: '.75rem 1.25rem'
    }
}

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
                this.setState({
                    username: data.data.user.username,
                    phone_number: data.data.user.phone_number,
                    profile_photo: data.data.user.profile_photo
                })
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
                <Button color="warning" size="lg"><Link 
                    className="text-white d-block" to="/create">Create Auction
                </Link></Button>
                <ListGroupItem><Link style={styles.select} className="text-dark d-block" to="/" >Home</Link></ListGroupItem>
                <ListGroupItem><Link style={styles.select} className="text-dark d-block" to="/mybid" > My Bid </Link></ListGroupItem>
                {/* <ListGroupItem><Link style={styles.select} className="text-dark d-block" to="/myauction" > My Auction </Link></ListGroupItem> */}
                <ListGroupItem tag="a" href="" >Setting Profile</ListGroupItem>
            </ListGroup>
        )
    }
}
export default Profile