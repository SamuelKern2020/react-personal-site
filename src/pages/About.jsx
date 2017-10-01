import React from 'react'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

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
                        <h3>TITLE</h3>
                        <p>blabla blabla blabla</p>
                    </Col>
              </Row>
           </Grid>
       </div>

       <div className="section-portfolio">
           PORTFOLIO
       </div>

       <div className="section-resume">
           RESUME
       </div>
  </div>
)

export default About
