import React from 'react'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'

class Categories extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {
        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="span"
                        onClick={this.toggle}
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                    >
                        {this.props.name}
                    </DropdownToggle>
                    <DropdownMenu>
                        <div onClick={this.toggle}>Smartphone</div>
                        <div onClick={this.toggle}>PC</div>
                        <div onClick={this.toggle}>Other</div>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default Categories