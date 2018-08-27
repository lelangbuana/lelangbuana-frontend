import React, {Component} from 'react'

import NavBar from './../NavBar'
import CardAuction from './../CardAuction'
import Categories from './../Categories'
import Footer from './../Footer'

const cardBackground ={
    backgroundColor : '#BEBEBE'
}

class ListAuctionCard extends Component {
    render() {
        return (
            <div class="row">
                <CardAuction title="lISTING"/>
                <CardAuction title="iPhone"/>
                <CardAuction title="PC"/>
                <CardAuction title="Car"/>
                <CardAuction title="Motorcycle"/>
                <CardAuction title="House"/>
                <CardAuction title="Clothes"/>
                <CardAuction title="Sneaker"/>
                <CardAuction title="Jewelry"/>
            </div>
                
        )
    }
}

export default ListAuctionCard
