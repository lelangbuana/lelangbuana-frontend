import React, { Component } from 'react'
import { Collapse, ListGroup, ListGroupItem } from 'reactstrap'

class Example extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = { collapse: false }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem onClick={this.toggle} action>{this.props.name}</ListGroupItem>
                    <Collapse isOpen={this.state.collapse}>
                        <ListGroup>
                            <ListGroupItem action>PC</ListGroupItem>
                            <ListGroupItem action>Laptop</ListGroupItem>
                            <ListGroupItem action>Tablet</ListGroupItem>
                            <ListGroupItem action>E-dictionary</ListGroupItem>
                            <ListGroupItem action>Pad</ListGroupItem>
                        </ListGroup>
                    </Collapse>
                </ListGroup>
            </div>
        )
    }
}

export default Example