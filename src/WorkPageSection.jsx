import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


export class WorkPageSection extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="section">
                <Grid fluid={true}>
                    <Row>
                        <Col className="section-text">
                            <h2>{this.props.data.header}</h2>
                            <p>{this.props.data.text}</p>
                        </Col>
                        <Col className="section-image">
                            <img src={this.props.data.imgUrl}></img>
                        </Col>


                    </Row>
                </Grid>
                {/* <div className="section-text">
                    <h2>{this.props.data.header}</h2>
                    <p>{this.props.data.text}</p>

                </div>
                <div className="section-image">
                    <img src={this.props.data.imgUrl}></img>
                </div> */}



            </div>
        )
    }
}
