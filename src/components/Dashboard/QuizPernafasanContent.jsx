import React, { useState } from "react";
import QuizQuestionSistem from "./QuizQuestion";
import QuizResult from "./QuizResult";

const questions = [
  {
    id: 1,
    question: "Setelah udara masuk ke dalam hidung, udara masuk ke?",
    options: ["Faring", "Trakea", "Bronkus", "Paru-paru"],
    correctAnswer: "Faring",
  },
  {
    id: 2,
    question: "Bagian manakah dari sebuah system pernapasan yang berfungsi sebagai penyaring udara?",
    options: [
      "Alveolus",
      "Hidung",
      "Trakea",
      "Faring",
    ],
    correctAnswer: "Hidung",
  },
   {
    id: 3,
    question: "Apa fungsi utama dari Bronkus dalam system pernapasan?",
    options: [
      "Memastikan aliran udara ke paru-paru",
      "Menyaring Partikel berbahaya dari udara",
      "Mengatur tekanan udara",
      "Pertukaran gas oksigen dan Karbon dioksida",
    ],
    correctAnswer: "Memastikan aliran udara ke paru-paru",
  },
   {
    id: 4,
    question: "Susunlah alur perjalanan udara dari masuknya hidung hingga paru-paru sesuai dengan urutan yang benar:",
    options: [
      "Udara masuk melalui hidung > Faring > Laring > Trakea > Bronkus",
      "Udara masuk melalui hidung > Trakea > Faring > Laring > Bronkus",
      "Udara masuk melalui hidung > Laring > Faring > Trakea > Bronkus",
      "Udara masuk melalui hidung > Laring > Trakea > Bronkus",
    ],
    correctAnswer: "Udara masuk melalui hidung > Faring > Laring > Trakea > Bronkus",
  },
  {
    id: 5,
    question: "Dalam mekanisme pernapasan dada, otot yang mengalami kontraksi adalah",
    options: [
      "Diafragma",
      "Antar tulang rusuk (Interkostal)",
      "Leher",
      "Area Perut (Abdominal)",
    ],
    correctAnswer: "Antar tulang rusuk (Interkostal)",
  },
  // Tambahkan pertanyaan lain sesuai kebutuhan
];

const QuizPernafasan = () => {
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

export default QuizPernafasan;
