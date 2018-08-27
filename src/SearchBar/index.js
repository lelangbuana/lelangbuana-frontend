import React from 'react'
import { InputGroup, 
    InputGroupText, 
    InputGroupAddon, 
    Input,
    Container,
    Row,
    Col 
} from 'reactstrap'

const SearchBar = (props) => {
    return (
        <InputGroup >
            <Input />
            <InputGroupAddon addonType="append">
                <InputGroupText><img src={require('./../Assets/search.png')}></img></InputGroupText>
            </InputGroupAddon>
        </InputGroup>

    )
}
export default SearchBar