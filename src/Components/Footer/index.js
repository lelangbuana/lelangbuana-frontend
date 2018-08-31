import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const styles = {
    colors: {
        backgroundColor: '#344A77',
        textAlign: 'center'
    },

    p: {
        color: 'white',
        fontSize: '0.5em'
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Container fluid style={styles.colors}>
                    <span style={styles.p}>
                        <Link to="/debug">© 2018 Lelangbuana</Link>
                    </span>
                </Container>
            </div>
        )
    }
}
export default Footer
