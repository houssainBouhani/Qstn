/* in this file two functions that render the content of the surevery dynamically depends on question type*/

import { Slider } from "primereact/slider";

// display questions form  combination depends on question type
const displayQuestionForm = (question, Range, setRange) => {
  switch (question.type) {
    case "slider":
      return (
        <>
          <div className="d-flex justify-content-between align-items-center range-container">
            <label htmlFor="range" className="me-3">
              1
            </label>

            <Slider
              value={Range}
              onChange={(e) => setRange(e.value)}
              id="range"
              className="w-100"
            />

            <label htmlFor="range" className="ms-3">
              10
            </label>
          </div>
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

// display buttons combinisation depends on question type
const displayQuestionButtons = (question, nextQuestion) => {
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

export { displayQuestionForm, displayQuestionButtons };
