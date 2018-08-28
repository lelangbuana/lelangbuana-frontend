import React from 'react'
import { Table, Label } from 'reactstrap'

export default class MyBid extends React.Component {
    render() {
        return (
            <div>
                <Label>My Bid</Label>
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
