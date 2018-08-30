import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'

const styles = {
    button : {
        width : '100px'
    }
}

class CreateAnAuction2 extends Component {
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
                <Button style={styles.button} type="submit">Submit</Button>
            </Form>
        )
    }
}
export default CreateAnAuction2