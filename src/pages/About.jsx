import React from 'react'
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

const About = () => (
  <div className="page-about">
      <Jumbotron>
         <h1>Hi,</h1>
         <h2>I'm Sam</h2>
         <p>Web Developer + Entrepreneur</p>
       </Jumbotron>

       <div className="section-about">

           <Grid fluid={true}>
               <Row className="show-grid">
                    <Col>
                        <h2>About Me</h2>
                        <p>I’m a student / entrepreneur with a passion for turning ideas into reality and a ceaseless energy for creation.</p>
                        <p>Big picture: I love working with talented, diverse teams to build innovative technologies that solve real problems.</p>
                    </Col>
              </Row>
           </Grid>
       </div>

       <div className="section-portfolio">
           <Grid fluid={true}>
               <Row className="show-grid">
                    <Col>
                        <h2>Work</h2>
                    </Col>
              </Row>
           </Grid>
       </div>

       <div className="section-resume">
           <Grid fluid={true}>
               <Row className="show-grid">
                    <Col xsOffset={1}>
                        <h2>Resume</h2>
                        <p>If you're into that.</p>

                        <Button bsStyle="primary" bsSize="large">Download CV</Button>
                    </Col>
              </Row>
           </Grid>
       </div>
  </div>
)

export default About
