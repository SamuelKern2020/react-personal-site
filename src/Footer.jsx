import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';



export class Footer extends Component {

    render() {
        return(
            <Grid fluid={true}>
                <Row className="show-grid">
                     <Col sm={7} className="section-1">
                         <h3>REACH OUT</h3>

                         <h4>I'm always down to chat.</h4>

                         <p>samuel.kern11@gmail.com</p>
                         <p>linkedIn</p>

                    </Col>
                    <Col sm={5} className="section-2">
                        <h4>This site was built with React.js, Bootstrap, and Node.js.</h4>
                   </Col>
               </Row>
            </Grid>

        )
    }
}
