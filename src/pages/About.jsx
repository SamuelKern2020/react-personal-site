import React from 'react'
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import { PortfolioBlock } from '../PortfolioBlock.jsx'
import ScrollableAnchor from 'react-scrollable-anchor'

const data = [
    {
        key: 1,
        header: "Sharelift",
        subheader: "HYBRID MOBILE APP",
        description: "A rideshare app for skiers and snowboarders.",
        thumb: "/build/images/work-thumb-sharelift.png"
    },
    {
        key: 2,
        header: "SAMSUNG USA",
        subheader: "Websites",
        description: "Several websites for Samsung while interning for R/GA in NYC ",
        thumb: "build/images/work-thumb-samsung.png"
    },
    {
        key: 3,
        header: "Boomer Bot",
        subheader: "Chatbot",
        description: "A prototype for a Facebook Messenger chatbot for ESPN. ",
        thumb: "build/images/work-thumb-sharelift.png"
    }
]



const About = () => (
  <div className="page-about">
      <Jumbotron>
         <h1>Hi,</h1>
         <h2>I'm Sam</h2>
         <p>Web Developer + Entrepreneur</p>
       </Jumbotron>

       <div className="section-about">
           <a href='#section1'> Go to section 1 </a>

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

           <div className="portfolio-grid">
                   {data.map(function(result) {
                       return <PortfolioBlock key={result.id} data={result}/>;
                   })}
           </div>

       </div>




       <ScrollableAnchor id={'anchor-resume'}>
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
       </ScrollableAnchor>



  </div>
)

export default About
