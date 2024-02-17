import React, { useState } from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import BlueCard from './components/BlueCard'
import { Button } from 'react-bootstrap';
import './App.css';

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });

}

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    isChecked: false // For checkbox
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Reset form data if needed
    setFormData({
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      isChecked: false
    });
  };

  const exportToExcel = () => {
    // Retrieve data from local storage
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const data = JSON.parse(savedData);

      // Convert data to CSV format
      const csvContent = `data:text/csv;charset=utf-8,
        Email,Password,Address1,Address2,City,State,Zip,Checked\n
        ${data.email},${data.password},${data.address1},${data.address2},${data.city},${data.state},${data.zip},${data.isChecked}\n`;

  // Create a link element
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'formData.csv');
  
  // Append the link to the DOM and click it to start download
  document.body.appendChild(link);
  link.click();
}
};

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>

          <Button variant="primary" onClick={scrollToBottom}>To Bottom</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="primary" onClick={exportToExcel}>Export to Excel</Button>


          <Container>
            <Row>
              <Col>1 of 2</Col>
              <Col>2 of 2</Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St"
                name="address1"
                value={formData.address1}
                onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor"
                name="address2"
                value={formData.address2}
                onChange={handleChange} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  value={formData.city}
                  onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose..."
                  name="state"
                  value={formData.state}
                  onChange={handleChange}>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out"
                name="isChecked"
                checked={formData.isChecked}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <BlueCard />
        </div>
      );
    }




    export default App;
