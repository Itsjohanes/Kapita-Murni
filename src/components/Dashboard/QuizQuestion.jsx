import React, { useState, useEffect } from "react";

const QuizQuestion= ({
  question,
  onAnswerSelect,
  onNextQuestion,
  isLastQuestion,
  onSubmit,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
    onAnswerSelect(option);
  };

  useEffect(() => {
    // Reset selected option when the question changes
    setSelectedOption(null);
  }, [question]); // Reset when the question prop changes

  return (
    <div className="bg-button p-4 rounded shadow mb-4 ">
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`${
              selectedOption === option ? "bg-green-500" : "bg-black"
            } text-white font-semibold py-2 px-4 rounded`}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded mt-4"
        onClick={isLastQuestion ? onSubmit : onNextQuestion}
      >
        {isLastQuestion ? "Selesai" : "Berikutnya"}
      </button>
    </div>
  );
};

export default QuizQuestion;
