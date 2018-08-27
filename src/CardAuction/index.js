import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'

class CardAuction extends  React.Component{
    constructor(props) {
        super(props)

    }

    render() {

  
        return (
            <div class="col-xs-3">
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>Description</CardSubtitle>
                        <CardText>Quick Brown Fox Jump Over The Lazy Dog</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
} 

export default CardAuction