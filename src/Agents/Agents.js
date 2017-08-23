/**
 * Component: Settings
 * Purpose: Configuration and Validation of yaml file.
 * Properties:
 *  data: Data object from API request
 **/

//React and React Bootstrap imports
import React, {Component, Text} from 'react';
import {
  Col,
  Row,
  ControlLabel,
  FormControl,
  Grid,
  Panel,
  Well,
  Button,
} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Dashboard/Footer/Footer.js';

class Agents extends Component {
  constructor () {
    super ();
    this.state = {
      data: [],
    };
  }

  render () {
    return (
      <div>
        <Navbar />

        <form className="container">
          <Grid>
            <Row className="show-grid">
              <Well>

<<<<<<< HEAD
                <ControlLabel>Agent 1</ControlLabel>
=======
                <ControlLabel>Agent 0</ControlLabel>
>>>>>>> f77a40f7f4d08718b0f788f94dd776d2c3d3935d
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="log/garnet.log"
                />

<<<<<<< HEAD
                <ControlLabel>Agent 2</ControlLabel>
=======
                <ControlLabel>Agent 1</ControlLabel>
>>>>>>> f77a40f7f4d08718b0f788f94dd776d2c3d3935d
                <FormControl componentClass="select" placeholder="select">
                  <option value="other">info</option>
                </FormControl>

<<<<<<< HEAD
                <ControlLabel>Agent 3</ControlLabel>
=======
                <ControlLabel>Agent 2</ControlLabel>
>>>>>>> f77a40f7f4d08718b0f788f94dd776d2c3d3935d
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="cache"
                />

<<<<<<< HEAD
                <ControlLabel>Agent 4</ControlLabel>
=======
                <ControlLabel>Agent 3</ControlLabel>
>>>>>>> f77a40f7f4d08718b0f788f94dd776d2c3d3935d
                <FormControl componentClass="select" placeholder="select">
                  <option value="other">en</option>
                </FormControl>

<<<<<<< HEAD
                <ControlLabel>Agent 5</ControlLabel>
=======
                <ControlLabel>Agent 4</ControlLabel>
>>>>>>> f77a40f7f4d08718b0f788f94dd776d2c3d3935d
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="100"
                />

<<<<<<< HEAD
                <ControlLabel>Agent 6</ControlLabel>
=======
                <ControlLabel>Agent 5</ControlLabel>
>>>>>>> f77a40f7f4d08718b0f788f94dd776d2c3d3935d
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="10"
                />

<<<<<<< HEAD
                <ControlLabel>Agent 7</ControlLabel>
=======
                <ControlLabel>Agent 6</ControlLabel>
>>>>>>> f77a40f7f4d08718b0f788f94dd776d2c3d3935d
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="127.0.0.1"
                />

<<<<<<< HEAD
                <ControlLabel>Agent 8</ControlLabel>
=======
                <ControlLabel>Agent 7</ControlLabel>
>>>>>>> f77a40f7f4d08718b0f788f94dd776d2c3d3935d
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="5000"
                />
              </Well>
            </Row>
          </Grid>
        </form>

        <Col xs={8} xsOffset={2}>
          <Button
            bsStyle="success"
            bsSize="large"
            block
            style={{marginBottom: '30px'}}
          >
            Save
          </Button>
        </Col>

        <Footer />
      </div>
    );
  }
}

//Default properties
Agents.defaultProps = {
  data: [],
};

//Exports class to Global namespace
export default Agents;
