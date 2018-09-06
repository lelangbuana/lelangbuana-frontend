import React,{Component} from 'react'
import { Card, CardImg, CardBody} from 'reactstrap'


const styles = {
    margins: {
        // marginRight: '35px',
        marginBottom: '25px',
        height: '350px'
    },
    sizes: {
        width: '100%'
    }
}

class CardAuction extends Component {
    render() {
        return (
            <div
                title={this.props.title}>
                <Card style={styles.margins} body className="text-center" onClick={this.props.onClick}>
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
            </div>
        )
    }
}


export default CardAuction
