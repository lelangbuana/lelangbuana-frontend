import React from 'react'
import { Card, CardImg } from 'reactstrap'
  
class ProductImage extends  React.Component {
   
    render(){
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.src} alt="images" />
                </Card>
            </div>
        )
    }
}
  
export default ProductImage
