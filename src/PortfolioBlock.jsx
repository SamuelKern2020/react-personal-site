import React, {Component} from 'react';
import { Col } from 'react-bootstrap';

export class PortfolioBlock extends Component {

    constructor(props){
        super(props)

        // if you add any functions that reference METHODS
        // in the parent componenent, you need to add
        // this.handle___ = this.handle___.bind(this)
    }

    handleHover(e){
        // handle a hover event... maybe change the class?

    }

    handleClick(e){
        console.log("Fucking clicked it bro");
        console.log(e.target);
        // you could probably pass back an ID or something
    }

    render() {



        return(
                <Col xs={12} sm={6} lg={4} className="card" onClick={this.handleClick}>
                    <h5>{this.props.data.header}</h5>
                    <h6>{this.props.data.subheader}</h6>
                    <p>{this.props.data.description}</p>
                </Col>

        )
    }

}
