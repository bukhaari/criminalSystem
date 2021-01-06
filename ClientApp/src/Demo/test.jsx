import React from 'react';
import { Component } from 'react';
import { Row, Col, Card} from 'react-bootstrap';

import Aux from '../hoc/_Aux'; 
// import Card from '../App/components/MainCard';

class Test extends Component {

    state = {
      
    };

    render() {
      return (
       <Card>
           <Card.Header>
              <Card.Title as="h5" >Test</Card.Title>
           </Card.Header>
           <Card.Body>
           <p> 
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident"
            </p>
           </Card.Body>
       </Card>
      );

    };

};

export default Test;