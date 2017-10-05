import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';



export class Footer extends Component {

    render() {
        return(
            <Grid fluid={true}>
                <Row className="show-grid">
                     <Col sm={7} className="section-1">
                         <h2>Section 1</h2>
                    </Col>
                    <Col sm={5} className="section-2">
                        <h2>Section 2</h2>
                   </Col>
               </Row>
            </Grid>

        )
    }
}
