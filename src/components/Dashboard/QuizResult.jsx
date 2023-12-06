import React from "react";

const QuizResult = ({ score, totalQuestions }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      {score > totalQuestions / 2 ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-sm font-bold mb-4 text-green-500 ">
            Skor Anda {score}
          </h1>
          <img
            className="rounded-full my-2"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2o3OWQzbXY2OTRldDRrZnppa2owYW5ic2ZsN2U0NzQwcmt1ZTZ5NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9xt1MUZqkneFiWrAAD/giphy.gif"
            width={200}
          />
          <h1 className="text-3xl font-bold mb-4 text-green-500">
            Selamat Anda Lulus!
          </h1>
          <button className="bg-green-500 hover:bg-black text-white font-semibold py-2 px-4 rounded mt-4">
            <a href="/dashboard/quiz">Kembali ke Quiz</a>
          </button>
        </div>
      ) : (
        <div className="flex flex-col  justify-center items-center">
          <h1 className="text-3xl sm:text-lg font-bold mb-4 text-red-700">
            Skor Anda {score}
          </h1>
          <img
            className="my-2"
            src="https://media3.giphy.com/media/YRhT9PSJe4twXxTE0U/giphy.gif?cid=ecf05e47ft116fok01s6dtdhnmemn3ased3eow33pifpz6gz&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            width={200}
          />
          <h1 className="text-3xl font-bold mb-4 text-red-700">Coba Lagi!</h1>
          <button className="bg-green-500 hover:bg-black text-white font-semibold py-2 px-4 rounded mt-4">
            <a href="/dashboard/quiz">Kembali ke Quiz</a>
          </button>
        </div>
      )}
      {/* <h2 className="text-lg font-semibold mb-4">Hasil Quiz</h2>
      <p>
        Anda telah menjawab {score} dari {totalQuestions} pertanyaan dengan
        benar.
      </p> */}
    </div>
  );
};

export default QuizResult;
