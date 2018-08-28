import React from 'react'
import { Card, CardImg } from 'reactstrap'
  
const ProductImage = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="images" />
            </Card>
        </div>
    )
}
  
export default ProductImage
