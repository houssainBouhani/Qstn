import React from "react";
import { Card, Form } from "react-bootstrap";

const Question = (props) => {
  const { question, Index, indexModal, nextQuestion } = props;



  return (
    <Card
      border="light"
      className={`custom-card p-5 ${
        Index !== indexModal ? "d-none" : "d-block"
      } `}
    >
      <Card.Body>
        <Card.Title className="mb-5">{question.description}</Card.Title>
        <Card.Text></Card.Text>
        <Card.Footer className="d-flex justify-content-center custom-footer">
          <button
            className="btn btn-primary primary-button "
            onClick={() => nextQuestion()}
          >
           {question.button}
          </button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Question;
