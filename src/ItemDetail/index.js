import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    Container,
    Row,
    Col, 
    Label
} from 'reactstrap'

import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import ProductImage from '../Components/DetailProductCarousel'
import DetailProductListProduct from '../Components/DetailProductListProduct'
import DetailProductBidStatus from '../Components/DetailProductBidStatus'
import DetailProductDetailPages from '../Components/DetailProductDetailPages'
import Profile from '../Components/Profile'

const categories = [
    {name:'Computers',categories:['Laptop','PC','Netbook']},
    {name:'Electronic, AV & Camera',categories:['DSLR','Mirrorless','Webcam']},
    {name:'Music',categories:['Music Player','Speaker']},
    {name:'Book & Magazine',categories:['Science-Fiction','Non-Fiction']}
]

const mapStateToProps = state => {
    return {
      title: state.user.title,
      src: state.user.src,
      description: state.user.description
    }
  }

class ItemDetail extends Component {
    
    static get propTypes() {
        return {
            children: PropTypes.any,
            dispatch: PropTypes.any,
            key: PropTypes.string,
            title: PropTypes.string,
            src: PropTypes.string,
            description: PropTypes.string
        }
    }
    state = {
        title:this.props.title,
        src:this.props.src,
        description:this.props.description
    }

    createCategories (item,index) {
        return <Categories key={item.name+index} name={item.name} categories={item.categories}/>
    }
    render(){
        
        let listCategories = categories.map(this.createCategories)
        return(
            <div>
                <Container fluid>
                    <Row>
                        <Col sm="2">
                            
                            <Profile/>
                            <br/>
                            {listCategories}
                            
                        </Col>
                        <Col sm="10">
                            <Label>{this.props.title}</Label>
                            <Row>
                                <Col>
                                    <ProductImage/>
                                </Col>
                                <Col>
                                    <DetailProductListProduct/>
                                </Col>
                                <Col>
                                    <DetailProductBidStatus/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <DetailProductDetailPages/>
                    </Row>
                    <Row>
                        <Footer/>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default  connect(mapStateToProps )(ItemDetail)