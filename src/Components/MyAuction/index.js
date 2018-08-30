import React, {Component} from 'react'
import {Container, ListGroup, Collapse, ListGroupItem,
    Media, Table} from 'reactstrap'

class MyAuction extends Component{
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = { collapse: false }
    }
    
    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }
    
    render(){
        return(
            <Container>
                <ListGroup>
                    <ListGroupItem onClick={this.toggle}>
                        <Media>
                            <Media left href="">
                                <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                            </Media>
                            <Media body>
                                <Media heading>
          Hatsune Miku Dakimakura
                                </Media>
                                <Media><span>Expected Price : </span></Media>
                                <Media><span>Current Price : </span></Media>
                                <Media><span>From : </span></Media>
                            </Media>
                        </Media>
                    </ListGroupItem>
                    <Collapse isOpen={this.state.collapse}>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Closed Date</th>
                                    <th>Closed Time</th>
                                    <th>User</th>
                                    <th>Bid Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Collapse>
                </ListGroup>
            </Container>
        )
    }
}

export default MyAuction
