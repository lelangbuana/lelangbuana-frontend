import React from 'react'
import { Media, ListGroup, ListGroupItem, Button } from 'reactstrap'

const Profile = () => {
    return (
        <ListGroup>
            <ListGroupItem>
                <Media>
                    <Media left >
                        <Media object data-src="holder.js/64x64" alt="image" />
                    </Media>
                    <Media body>
                        <Media heading>
          Username
                        </Media>
        +6281-888-888
                    </Media>
                </Media>
                <Button color="warning"> Create An Auction</Button>
            </ListGroupItem>
            <ListGroupItem tag="a" href="" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="" action>My Bid</ListGroupItem>
            <ListGroupItem tag="a" href="" action>My Auction</ListGroupItem>
            <ListGroupItem tag="a" href="" action>Setting Profile</ListGroupItem>
            <ListGroupItem tag="a" href="" action>Logout</ListGroupItem>
        </ListGroup>
    )
}

export default Profile