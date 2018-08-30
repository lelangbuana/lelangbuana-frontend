import React, {Component} from 'react'
import { Table } from 'reactstrap'

class MyBid extends Component {
    render() {
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Items</th>
                            <th>Seller</th>
                            <th>My Bid</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default MyBid