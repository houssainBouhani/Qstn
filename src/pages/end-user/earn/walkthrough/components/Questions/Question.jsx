import React, { useState } from "react";
import { Card } from "react-bootstrap";

import { displayQuestionForm, displayQuestionButtons } from "./../../utils";

import "./question.css";

const Question = (props) => {
  const { question, Index, indexModal, nextQuestion } = props;
  const [Range, setRange] = useState(null);
  /*
  const displayQuestionForm = () => {
    switch (question.type) {
      case "slider":
        return (
          <>
            <label htmlFor="range" className="d-inline-block">
              1
            </label>

            <Slider
              value={Range}
              onChange={(e) => setRange(e.value)}
              id="range"
            />

            <label htmlFor="range" className="d-inline-block">
              2
            </label>
          </>
        );
      case "multiple choices":
        return (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                ETH
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                BTC
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                LTC
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Near
              </label>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const displayQuestionButtons = () => {
    switch (question.button) {
      case "yes/no":
        return (
          <>
            <button
              className="btn btn-primary primary-button me-2"
              onClick={() => nextQuestion()}
            >
              yes
            </button>
            <button
              className="btn btn-primary primary-button "
              onClick={() => console.log("no")}
            >
              no
            </button>
          </>
        );
      case "Start":
        return (
          <>
            <button
              className="btn btn-primary primary-button me-2"
              onClick={() => nextQuestion()}
            >
              Start
            </button>
          </>
        );
      case "Submit":
        return (
          <>
            <button
              className="btn btn-primary primary-button me-2"
              onClick={() => nextQuestion()}
            >
              Submit
            </button>
          </>
        );
      case "Submit":
        return (
          <>
            <button
              className="btn btn-primary primary-button me-2"
              onClick={() => nextQuestion()}
            >
              Submit
            </button>
          </>
        );
      case "Next":
        return (
          <>
            <button
              className="btn btn-primary primary-button me-2"
              onClick={() => nextQuestion()}
            >
              Next
            </button>
          </>
        );
      default:
        return (
          <>
            <button
              className="btn btn-primary primary-button me-2"
              onClick={() => nextQuestion()}
            >
              Near Names
            </button>
          </>
        );
    }
  };
*/
  return (
    <Card
      border="light"
      className={`custom-card p-5 ${
        Index !== indexModal ? "d-none" : "d-block"
      } `}
    >
      <Card.Body className="question-container">
        <Card.Title className="mb-3">{question.description}</Card.Title>
        <div>{displayQuestionForm(question, Range, setRange)}</div>
        <Card.Footer className="d-flex justify-content-center custom-footer">
          {displayQuestionButtons(question, nextQuestion)}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Question;
