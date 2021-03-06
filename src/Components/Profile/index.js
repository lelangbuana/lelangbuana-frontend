import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Loader from '../Assets/loader.gif'

const request = axios.create({
    baseURL: 'https://lelangbuana.herokuapp.com' || 'http://localhost:3000',
    timeout: 50000,
    headers: { Authorization: '' }
})

const styles = {
    select : {
        margin: '-.75rem -1.25rem',
        padding: '.75rem 1.25rem'
    },

    size: {
        width : '120px',
        height : '120px'

    },
    text : {
        textAlign : 'center'
    }
}

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            phone_number: '',
            profile_photo: '',
            loading: true

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
            
        setTimeout(() => this.setState({ loading: false }), 1500)
    }

    render(){
        const { loading } = this.state
    
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
            return <img src={Loader} alt="loading..." />   // render null when app is not ready
        }  
        return (
            <ListGroup>
                <ListGroupItem>
                    <Row>
                        <Col>
                            <img className="mx-auto d-block" style={styles.size} src={this.state.profile_photo} alt="Profile" ></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col style={styles.text}><span>{this.state.username}</span></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col style={styles.text}><span>{this.state.phone_number}</span></Col>
                        <Col></Col>
                    </Row>
                    
                </ListGroupItem>
                <Button color="warning" size="lg"><Link 
                    className="text-dark d-block" to="/create">Create Auction
                </Link></Button>
                <ListGroupItem><Link style={styles.select} className="text-dark d-block" to="/" >Home</Link></ListGroupItem>
                <ListGroupItem><Link style={styles.select} className="text-dark d-block" to="/mybid" > My Bid </Link></ListGroupItem>
                <ListGroupItem><Link style={styles.select} className="text-dark d-block" to="/myauction" > My Auction </Link></ListGroupItem>
                {/* <ListGroupItem tag="a" href="" >Setting Profile</ListGroupItem> */}
            </ListGroup>
        )
    }
}
export default Profile