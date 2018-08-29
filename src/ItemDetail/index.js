import React, { Component } from 'react'

import {
    Container,
    Row,
    Col, 
    Label
} from 'reactstrap'

import Categories from '../Components/Categories'
import ProductImage from '../Components/DetailProductCarousel'
import DetailProductListProduct from '../Components/DetailProductListProduct'
import DetailProductBidStatus from '../Components/DetailProductBidStatus'
import DetailProductDetailPages from '../Components/DetailProductDetailPages'
import Profile from '../Components/Profile'

const styles ={
    space : {
        marginTop : '2rem',
        marginBottom: '5rem'
    },

    label: {
        fontSize : '25px',
        fontWeight : 'bold'
    },

    tabs : {
        marginTop : '4rem'
    }

}

const categories = [
    {name:'Computers',categories:['Laptop','PC','Netbook']},
    {name:'Electronic, AV & Camera',categories:['DSLR','Mirrorless','Webcam']},
    {name:'Music',categories:['Music Player','Speaker']},
    {name:'Book & Magazine',categories:['Science-Fiction','Non-Fiction']}
]


class ItemDetail extends Component {
    constructor(props){
        super(props)
        this.createCategories=this.createCategories.bind(this)
    }

    createCategories (item) {
        return <Categories name={item.name} categories={item.categories}/>
    }
    render(){
        let listCategories = categories.map(this.createCategories)
        return(
            <div style={styles.space}>
                <Container fluid>
                    <Row>
                        <Col sm="3">            
                            <Profile/>
                            <br/>
                            {listCategories}             
                        </Col>
                        <Col sm="9">
                            <Label style={styles.label}>Hatsune Miku Snow Ver. Dakimakura</Label>
                            <Row>
                                <Col xs="4">
                                    <ProductImage/>
                                </Col>
                                <Col xs="4">
                                    <DetailProductListProduct/>
                                </Col>
                                <Col xs="4">
                                    <DetailProductBidStatus/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={styles.tabs} > 
                            <DetailProductDetailPages/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default ItemDetail