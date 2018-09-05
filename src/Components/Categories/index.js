import React, { Component } from 'react'
import { Collapse, ListGroup, ListGroupItem } from 'reactstrap'

import PropTypes from 'prop-types'

class Categories extends Component {
    static get propTypes() {
        return {
            children: PropTypes.any,
            name: PropTypes.string,
            categories: PropTypes.array
        }
    }

    state = {
        collapse: false
    }

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.createCategory = this.createCategory.bind(this)
        this.state = {
            collapse: false
        }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    createCategory(item, index) {
        return (
            <ListGroupItem key={index} >
                {item}
            </ListGroupItem>
        )
    }

    render() {
        let itemCategory = this.props.categories
        let listCategories = itemCategory.map(this.createCategory)

        return (
            <div>
                <ListGroup>
                    <ListGroupItem onClick={this.toggle} >
                        {this.props.name}
                    </ListGroupItem>
                    <Collapse isOpen={this.state.collapse}>
                        <ListGroup>{listCategories}</ListGroup>
                    </Collapse>
                </ListGroup>
            </div>
        )
    }
}

export default Categories
