
import React,{Component} from 'react'
import { Card, CardImg, CardBody, CardSubtitle} from 'reactstrap'
import Countdown from 'react-countdown-now'



const styles = {
    margins: {
        // marginRight: '35px',
        marginBottom: '25px',

        height: '100%'
        

    },
    sizes: {
        width: '100%',
        height: '230px'
    },
    color: {
        backgroundColor: '#1E2650',
        borderColor: '#FFFFFF'
    }
}

class CardAuction extends Component {
    render() {
        return (
            <div
                title={this.props.title}>
                <Card body inverse style={styles.margins, this.props.color} body className="text-center" onClick={this.props.onClick}>
                    <CardImg
                        top
                        style={styles.sizes}
                        src={this.props.src}
                        alt="Card image cap"
                    />
                    <CardBody >

                        <span><h5>{this.props.title}</h5></span>

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

