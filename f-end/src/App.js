import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
    // Here you can send the form data to a backend server using fetch or Axios
  };

  return (
    <div className="container">
      <h1>Flight Details</h1>
      {showSuccessMessage && (
        <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
          Form Submitted Successfully
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formflight number">
          <Form.Label>Flight number</Form.Label>
          <Form.Control type="text" placeholder="Enter flight number" />
        </Form.Group>

        <Form.Group controlId="formarrival">
          <Form.Label>Arrival</Form.Label>
          <Form.Control type="text" placeholder="Enter arrival time" />
        </Form.Group>

        <Form.Group controlId="formcategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter flight category" />
        </Form.Group>

        <Form.Group controlId="formdelay">
          <Form.Label>Delay</Form.Label>
          <Form.Control type="text" placeholder="Enter flight delay" />
        </Form.Group>

        <Form.Group controlId="departure">
          <Form.Label>Departure</Form.Label>
          <Form.Control type="text" placeholder="Enter departure timings" />
        </Form.Group>

        <Form.Group controlId="model number">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" placeholder="Enter model" />
        </Form.Group>
        <br/><br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App