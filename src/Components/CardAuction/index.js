import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'

class CardAuction extends  React.Component{

    render() {
        return (
            <div class="col-xs-3">
                <Card onClick={this.props.onClick}>
                    <CardImg top width="100%" src={this.props.src} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.user}</CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
} 

export default CardAuction