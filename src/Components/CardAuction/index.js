import React from 'react'
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap'

const styles = {
    margins: {
        marginRight: '15px',
        marginBottom: '25px'
    },
    sizes: {
        width: '240px',
        height: '290px'
    }
}

class CardAuction extends React.Component {
    render() {
        return (
            <div
                className="col-xs-3"
                style={styles.margins}
                title={this.props.title}
            >
                <Card onClick={this.props.onClick}>
                    <CardImg
                        top
                        style={styles.sizes}
                        src={this.props.src}
                        alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        {/* <CardSubtitle>Description</CardSubtitle> */}
                        {/* <CardText>{this.props.description}</CardText> */}
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardAuction
