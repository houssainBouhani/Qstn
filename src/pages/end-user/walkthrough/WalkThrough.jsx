import React, { useEffect, useState } from "react";

import "./walkthrough.style.css";

import questions from "./data.json";
import Question from "./components/Questions/Question";

const WalkThrough = (props) => {
  const [indexModal, setindex] = useState(0);

  useEffect(() => {}, []);

  const nextQuestion = () => {
    if (indexModal < questions.length - 1) {
      setindex(indexModal + 1);
    }
  };

  const onDisplayData = () => {
    return (
      <>
        {questions.map((question, index) => (
          <Question
            key={question.id}
            question={question}
            Index={index}
            indexModal={indexModal}
            nextQuestion={nextQuestion}
          />
        ))}
      </>
    );
  };

  return (
    <div className="walkthrough-container min-vh-100 d-flex justify-content-center align-items-center ">
      <div className="container">
          <div className="row">
              <div className="d-flex justify-content-center align-items-center">
              {onDisplayData()}
              </div>
          </div>
        </div>
    </div>
  );
};

export default WalkThrough;
