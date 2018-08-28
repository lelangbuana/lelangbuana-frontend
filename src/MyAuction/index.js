import React from 'react'
import {Container, ListGroup, Collapse, ListGroupItem,
    Media} from 'reactstrap'

export default class MyAuction extends React.Component{
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
                    <ListGroupItem>
                        <Collapse isOpen={this.state.collapse}>
                            <Media>
                                <Media left href="">
                                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                                </Media>
                                <Media body>
                                    <Media heading>
          Media heading
                                    </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </Media>
                            </Media>
                        </Collapse>
                    </ListGroupItem>
                
                   
                    <ListGroupItem>
                        <Collapse isOpen={this.state.collapse}>
                            <Media>
                                <Media left href="">
                                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                                </Media>
                                <Media body>
                                    <Media heading>
          Media heading
                                    </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </Media>
                            </Media>
                        </Collapse>
                    </ListGroupItem>
                </ListGroup>
            </Container>
        )
    }
}
