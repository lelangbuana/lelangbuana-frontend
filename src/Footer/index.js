import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            <ul class="list-group">
                                <li class="list-group-item border-0" tag="a" href="">Company Profile</li>
                                <li class="list-group-item border-0" tag="a" href="">Term and Condition</li>
                                <li class="list-group-item border-0" tag="a" href="">Privacy Policy</li>
                                <li class="list-group-item border-0" tag="a" href="">Inquiry/FAQ</li>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <ul class="list-group">
                                <li class="list-group-item border-0" tag="a" href="">How To Bid</li>
                                <li class="list-group-item border-0" tag="a" href="">How To Create an Auction</li>
                                <li class="list-group-item border-0" tag="a" href="">Usage Fees</li>
                                <li class="list-group-item border-0" tag="a" href="">Shipping Methods</li>
                            </ul>
                        </div>
                        <div class="col">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <img src={require('./../Assets/lelangbuana.png')} alt="logo"/>
                                    </div>
                                    <div class="row">
                                        <div class="col"><img src={require('./../Assets/facebook.png')} alt="facebook"/></div>
                                        <div class="col"><img src={require('./../Assets/instagram.png')} alt="instagram"/></div>
                                        <div class="col"><img src={require('./../Assets/twitter.png')} alt="twitter"/></div>
                                        <div class="col"><img src={require('./../Assets/youtube.png')} alt="youtube"/></div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <span> © 2018 Hak Cipta lelangbuana.com </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}
export default Footer