import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

class Footer extends React.Component {
    render() {
        return (
            
            <div class="col-sm-6">
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </div>
           
        )
    }
}
export default Footer