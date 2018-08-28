import React from 'react'
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'

export default class CreateAnAuction2 extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="itemdesc">Item Description</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image</Label>
                    <CustomInput type="file" id="image" name="image" />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}