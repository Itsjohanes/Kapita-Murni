import React from "react";
import { FaArrowRight } from "react-icons/fa";

const QuizContent = () => {
  const topics = [
    {
      id: 1,
      title: "Sistem Pernafasan",
      description:
        "Sistem pernafasan adalah serangkaian organ yang memungkinkan manusia untuk bernafas dan mengambil oksigen dari udara. Sistem ini melibatkan organ-organ seperti paru-paru, bronkus, dan diafragma.",
      gambar: "/pernafasan.jpg",
      link: "/dashboard/quiz-pernafasan",
    },
    {
      id: 2,
      title: "Penyakit pada Sistem Pernafasan",
      description:
        "Ada berbagai penyakit yang dapat memengaruhi sistem pernafasan, termasuk asma, bronkitis, pneumonia, dan penyakit paru-paru kronis. Penyakit-penyakit ini memerlukan perawatan medis yang tepat.",
      gambar: "/penyakit.jpg",
      link: "/dashboard/quiz-penyakit",
    },
  ];

  return (
    <div className="container mx-auto mt-8 ">
    {topics.map((topic) => (
      <div key={topic.id} className="p-4 rounded mb-4 bg-button">
        <img
          src={`${topic.gambar}`}
          alt={topic.title}
          className="w-full h-auto object-cover mb-4 max-h-96"
        />
        <h3 className="text-xl lg:text-left text-center font-semibold mb-2">{topic.title}</h3>
        <p className="text-gray-700 mb-4 text-justify">{topic.description}</p>
        <a
          href={`${topic.link}`}
          className="block bg-black hover:bg-button hover:border hover:text-black text-white font-semibold py-3 rounded text-center mt-2 w-full "
        > 
          Kerjakan Quiz Sekarang <FaArrowRight className="inline-block" />
        </a>
      </div>
    ))}
  </div>
  );
};

export default QuizContent;
