import React from 'react'
import { Container } from 'reactstrap'


const styles = {
    colors: {
        backgroundColor: '#344A77',
        textAlign: 'center'
    },

    p: {
        color: 'white',
        fontSize: '1em'
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Container fluid style={styles.colors}>
                    <span style={styles.p}>
                        © 2018 Lelangbuana
                    </span>
                </Container>
            </div>
        )
    }
}
export default Footer
