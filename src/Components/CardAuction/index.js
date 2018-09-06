
import React,{Component} from 'react'
import { Card, CardImg, CardBody, CardTitle, Row, Col} from 'reactstrap'
import Countdown from 'react-countdown-now'
import NumberFormat from 'react-number-format'
// import InfiniteScroll from 'react-infinite-scroller'



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
        let EnableTimer
        this.props.status==='success'
            ? EnableTimer = <p>CLOSED</p>
            : EnableTimer = 
            <Row><Col>
                <span>time remaining : <span>
                </span><Countdown date={Date.now()+((Date.parse(this.props.endDate)-Date.now()))}/></span>
            </Col></Row>
        return (

            <div
                title={this.props.title}>
                <Card  style={styles.margins} body className="text-center text-dark" onClick={this.props.onClick}>

                    <CardImg
                        top
                        style={styles.sizes}
                        src={this.props.src}
                        alt="Card image cap"
                    />

                    <CardBody>
                        <Row><Col><CardTitle><b>{this.props.title}</b></CardTitle></Col></Row>
                        <Row><Col><span>{this.props.status}</span></Col></Row>
                        <hr/>
                        <Row><Col><span>start bid : <b><NumberFormat value={this.props.startBid} displayType={'text'} thousandSeparator={true} prefix={'IDR. '}/></b></span></Col></Row>
                        
                        {EnableTimer}   
                        
                        

                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default CardAuction

