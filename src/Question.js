import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Question.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function Question({ question, options, selectedAnswer, onAnswerSelect, onCheckAnswer }) {
  return (
    <Container>
      <h2>{question}</h2>
      <Form>
        <Form.Group>
          {options.map((option, index) => (
            <Form.Check
              key={index}
              type="radio"
              id={`option-${index}`}
              label={option}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswerSelect(option)}
            />
          ))}
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={onCheckAnswer}>
        Next
      </Button>
    </Container>
  );
}

export default Question;
