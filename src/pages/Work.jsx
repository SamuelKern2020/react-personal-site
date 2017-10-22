import React from 'react'
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import { WorkPageSection } from '../WorkPageSection.jsx'

const data = [
    {
        key: 1,
        header: "Sharelift",
        subheader: "HYBRID MOBILE APP",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "https://dummyimage.com/510x327/e6dde6/000000"
    },
    {
        key: 2,
        header: "SAMSUNG USA",
        subheader: "Websites",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "https://dummyimage.com/510x327/e6dde6/000000"
    },
    {
        key: 3,
        header: "Boomer Bot",
        subheader: "Chatbot",
        text: "A prototype for a Facebook Messenger chatbot for ESPN. ",
        imgUrl: "https://dummyimage.com/510x327/e6dde6/000000"
    }
]

const Work = () => (
  <div>
    <div className="page-header"></div>
    <div className="section-container">
        {data.map(function(result) {
            return <WorkPageSection key={result.id} data={result}/>;
        })}
    </div>
  </div>
)

export default Work
