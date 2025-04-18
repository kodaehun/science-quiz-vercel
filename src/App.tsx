
import { useState } from "react";
import "./index.css";

const quizData = [
  {
    question: "“기체”란 무엇일까요?",
    options: [
      "물처럼 흐르는 것",
      "고정된 모양을 가진 것",
      "공기처럼 모양이 없고, 자유롭게 퍼지는 것",
      "돌처럼 단단한 것",
    ],
    answer: 2,
    explanation: "정답입니다! 기체는 공기처럼 자유롭게 퍼져요!",
  },
  {
    question: "“관찰”이란 무엇일까요?",
    options: [
      "상상으로 생각하는 것",
      "자세히 보고 알아보는 것",
      "규칙을 만드는 것",
      "실험을 망치는 것",
    ],
    answer: 1,
    explanation: "정답입니다! 관찰은 자세히 보고 알아보는 것이에요.",
  },
  {
    question: "“실험”이란 무엇일까요?",
    options: [
      "우연히 알아내는 방법",
      "책에 쓰인 내용을 외우는 것",
      "어떤 결과를 알아보려고 해보는 활동",
      "시험을 보는 것",
    ],
    answer: 2,
    explanation: "정답입니다! 실험은 직접 해보면서 결과를 알아보는 활동이에요.",
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const quiz = quizData[current];

  const handleSelect = (index) => {
    setSelected(index);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setCurrent((prev) => (prev + 1) % quizData.length);
  };

  return (
    <div className="container">
      <h2>과학 탐정 퀴즈 #{current + 1}</h2>
      <div className="card">
        <p>{quiz.question}</p>
        <div className="options">
          {quiz.options.map((opt, i) => (
            <button
              key={i}
              className={`btn ${
                showAnswer
                  ? i === quiz.answer
                    ? "correct"
                    : i === selected
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleSelect(i)}
              disabled={showAnswer}
            >
              {opt}
            </button>
          ))}
        </div>
        {showAnswer && (
          <div className="feedback">
            {selected === quiz.answer ? "✅ " : "❌ "}
            {quiz.explanation}
          </div>
        )}
      </div>
      {showAnswer && (
        <button onClick={handleNext} className="next-btn">
          다음 문제 ▶
        </button>
      )}
    </div>
  );
}

export default App;
