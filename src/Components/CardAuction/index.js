import React,{Component} from 'react'
import { Card, CardImg, CardBody,CardDeck} from 'reactstrap'


const styles = {
    margins: {
        marginRight: '35px',
        marginBottom: '25px'
    },
    sizes: {
        width: '220px', 
        height: '230px'
    }
}

class CardAuction extends Component {
    render() {
        return (
            <div
                style={styles.margins}
                title={this.props.title}>
                <CardDeck>
                    <Card body className="text-center" onClick={this.props.onClick}>
                        <CardImg
                            top
                            style={styles.sizes}
                            src={this.props.src}
                            alt="Card image cap"
                        />
                        <CardBody>
                            <span>{this.props.title}</span>
                        </CardBody>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}


export default CardAuction
