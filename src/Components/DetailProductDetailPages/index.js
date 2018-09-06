import React from 'react'
import {connect} from 'react-redux'

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap'
import classnames from 'classnames'

const styles = {
    p : {
        fontWeight : 'bold',
        fontSize : '18px'
    },
    span :{
        fontSize : '14px'
    }
}

const mapStateToProps = state => {
    return {
        item_description: state.auction.item_description,
        username: state.user.username,
        phone_number : state.user.phone_number,
        address : state.user.address
    }
}

class DetailProductDetailPages extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            activeTab: '1'
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            to="/"
                            className={classnames({
                                active: this.state.activeTab === '1'
                            })}
                            onClick={() => {
                                this.toggle('1')
                            }}
                        >
                            Item Info
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/"
                            className={classnames({
                                active: this.state.activeTab === '2'
                            })}
                            onClick={() => {
                                this.toggle('2')
                            }}
                        >
                            Seller Info
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/"
                            className={classnames({
                                active: this.state.activeTab === '3'
                            })}
                            onClick={() => {
                                this.toggle('3')
                            }}
                        >
                            Bid History
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col >
                                <p style={styles.span}>{this.props.item_description}</p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                <p style={styles.p}>Seller</p>
                                <span style={styles.span}>{this.props.username}</span>
                                <hr/>
                                <p style={styles.p}>Phone</p>
                                <span style={styles.span}>{this.props.phone_number}</span>
                                <hr/>
                                <p style={styles.p}>Address</p>
                                <span style={styles.span}>{this.props.address}</span>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col>
                                <p></p>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default connect (mapStateToProps) (DetailProductDetailPages)