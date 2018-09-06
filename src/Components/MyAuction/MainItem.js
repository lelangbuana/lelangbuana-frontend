import React from 'react'
import {
    ListGroup,
    ListGroupItem,
    Media
} from 'reactstrap'

import DetailItem from './DetailItem'


const styles = {
    image : {
        width : '150px',
        height : '120px'
    }
}

class MainItem extends React.Component{
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            max_bid: 0,
            min_bid: 0,
            highest_bid: 0,
            myAuctions: [],
            collapse: false
        }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    render(){
        return(
            <ListGroup >
                <ListGroupItem onClick={this.toggle}>
                    <Media>
                        <Media left href="">
                            <Media style={styles.image}
                                object
                                src={this.props.itemPhoto}
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body>
                            <Media heading>{this.props.title}</Media>
                            <Media>
                                <span>Expected Price : {this.props.maxBid} </span>
                            </Media>
                            <Media>
                                <span>Current Price : </span>
                            </Media>
                            <Media>
                                <span>From : {this.props.minBid}</span>
                            </Media>
                        </Media>
                    </Media>
                </ListGroupItem>
                <DetailItem username={this.props.username} isOpen={this.state.collapse} auctionId={this.props.auctionId}/>
            </ListGroup>
        )
    }
}

export default MainItem