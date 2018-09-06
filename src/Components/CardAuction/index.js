
import React,{Component} from 'react'
import { Card, CardImg, CardBody, CardSubtitle} from 'reactstrap'
import Countdown from 'react-countdown-now'



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

                        <CardSubtitle>{this.props.status}</CardSubtitle>
                        <p>{this.props.startBid}</p>
                        <Countdown date={Date.now()+((Date.parse(this.props.endDate)-Date.parse(this.props.startDate)))}/>
                        {/* <p>{this.props.maxBid}</p> */}
                        
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default CardAuction
