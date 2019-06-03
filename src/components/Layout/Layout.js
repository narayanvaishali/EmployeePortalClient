import React from 'react';
import {Container, Row} from 'react-bootstrap';
//import NavigationC from '../Navigation/NavigationC';
import Navi from '../../containers/Nav/Navi';
 
const layout = (props) => {
    return (
        <Container>
            <Row>
                <Navi/>
            </Row>
            <main>
                {props.children}
            </main>
        </Container>
    )
}

export default layout;