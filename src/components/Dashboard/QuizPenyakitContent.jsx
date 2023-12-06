import React, { useState } from "react";
import QuizQuestionSistem from "./QuizQuestion";
import QuizResult from "./QuizResult";

const questions = [
  {
    id: 1,
    question: "Bronkitis adalah iritasi yang terjadi pada...",
    options: ["Alveolus", "Trakea", "Laring", "Bronkus"],
    correctAnswer: "Bronkus",
  },
  {
    id: 2,
    question:
      "Mayoritas orang yang terkena penyakit kanker paru-paru adalah orang yang...",
    options: [
      "Kebiasaan merokok",
      "Kebiasaan mencium bau rokok",
      "Kebiasaan membakar sampah",
      "Diam di tempat angkringan dekat jalan",
    ],
    correctAnswer: "Kebiasaan merokok",
  },
  {
    id: 3,
    question:
      "Penyakit yang merusak bagian paru-paru terutama Alveolus adalah?",
    options: ["Kanker Paru-Paru", "Bronkitis", "Emfisema", "Aterosklerosis"],
    correctAnswer: "Emfisema",
  },
  {
    id: 4,
    question:
      "Berapa jumlah pasien yang meninggal pada tahun 2018 akibat kanker paru-paru?",
    options: ["26.000", "27.000", "6.000", "16.000"],
    correctAnswer: "26.000",
  },
  {
    id: 5,
    question: "Aterosklerosis disebabkan oleh?",
    options: [
      "zat kimia seperti tar",
      "Karbon Dioksida",
      "Karbon Monoksida",
      "Methanol",
    ],
    correctAnswer: "zat kimia seperti tar",
  },
];

const QuizPenyakit = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer) => {
    // Menyimpan jawaban pengguna dengan menggunakan id pertanyaan sebagai kunci
    setUserAnswers({ ...userAnswers, [questions[currentQuestion].id]: answer });
  };

  const handleNextQuestion = () => {
    // Pindah ke pertanyaan berikutnya jika belum mencapai pertanyaan terakhir
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    // Menghitung skor berdasarkan jawaban pengguna
    const score = calculateScore();
    // Menampilkan hasil quiz
    setShowResult(true);
  };

  const calculateScore = () => {
    // Menghitung skor berdasarkan jawaban pengguna yang benar
    let score = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="container mx-auto p-4">
      {showResult ? (
        <QuizResult
          score={calculateScore()}
          totalQuestions={questions.length}
        />
      ) : (
        <QuizQuestionSistem
          question={questions[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={currentQuestion === questions.length - 1}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default QuizPenyakit;
