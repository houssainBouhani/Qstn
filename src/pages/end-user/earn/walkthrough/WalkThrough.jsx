import React, { useEffect, useState } from "react";

//custom style
import "./walkthrough.style.css";

// questions data
import questions from "./data.json";

// question
import Question from "./components/Questions/Question";

const WalkThrough = () => {
  const [indexModal, setindex] = useState(0);

  const nextQuestion = () => {
    // if user reach the end of the tutorial questions stop progressing
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
    <div className="walkthrough-container pt-5 d-flex justify-content-center align-items-center ">
      <div className="container pt-5">
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
