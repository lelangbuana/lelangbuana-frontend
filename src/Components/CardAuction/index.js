
import React,{Component} from 'react'
import { Card, CardImg, CardBody, CardTitle, Row, Col} from 'reactstrap'
// import Countdown from 'react-countdown-now'
import NumberFormat from 'react-number-format'
import moment from 'moment'
import Loader from '../Assets/loader.gif'



const styles = {
    margins: {
        // marginRight: '35px',
        marginBottom: '25px',
        height: '100%'

    },
    sizes: {
        width: '100%',
        height: '230px'
    }
}

class CardAuction extends Component {
    state = {
        loading:true
        }
    
        componentDidMount(){
            setTimeout(() => this.setState({ loading: false }), 1500)
        }

    render() {
        const { loading } = this.state
    
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
            return <img src={Loader} alt="loading..." />   // render null when app is not ready
        }   
        let EnableTimer
        this.props.status==='success'
            ? EnableTimer = <p>CLOSED</p>
            : EnableTimer = 
            <Row><Col>
                <span> closed </span>
                <span>{this.props.endDate && moment(this.props.endDate).fromNow()}</span>
                
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
                        <Row><Col><span>start bid : <b><NumberFormat value={this.props.startBid} displayType={'text'} thousandSeparator={true} prefix={'IDR '}/></b></span></Col></Row>
                        
                        {EnableTimer}   
 
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default CardAuction

