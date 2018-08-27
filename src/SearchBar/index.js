import React from 'react'
import { InputGroup, 
    InputGroupAddon, 
    Input,
    Button
} from 'reactstrap'

const SearchBar = (props) => {
    return (
        <InputGroup >
            <Input />
            <InputGroupAddon addonType="append" >
                <Button outline color="info"><img src={require('./../Assets/search.png')} alt="search"/></Button>
            </InputGroupAddon>
        </InputGroup>

    )
}
export default SearchBar