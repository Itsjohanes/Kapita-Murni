import React from "react";

const AugmentedRealityMenuContent = () => {
  const topics = [
    {
      id: 0,
      title: "Hidung",
      description: "",
      gambar: "/nose.jpg",
      link: "https://hidung-ar-mind.vercel.app/",
    },
    {
      id: 1,
      title: "Faring, Laring, Trakea",
      description: "",
      gambar: "/ar_trakea.jpg",
      link: "https://mind-ar2-laring.vercel.app/",
    },
    {
      id: 2,
      title: "Paru-Paru (Bronkus, Bronkiolus, dan Alveolus)",
      description: "",
      gambar: "/ar_paru.jpg",
      link: "https://mind-ar-paru-paru.vercel.app/",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Organ Pernafasan</h2>
      {topics.map((topic) => (
        <div key={topic.id} className="p-4 rounded mb-4 bg-button">
          <img
            src={`${topic.gambar}`}
            alt={topic.title}
            className="w-full h-auto object-cover mb-4 max-h-96"
          />
          <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
          <p className="text-gray-700 mb-4">{topic.description}</p>
          <a
            href={topic.link}
            target="_blank" // opens the link in a new tab/window
            rel="noopener noreferrer" // recommended for security
            className="block bg-black hover:bg-button hover:border hover:text-black text-white font-semibold py-3 rounded text-center mt-2 w-full "
          >
            Lihat Augmented Reality (AR)
          </a>
        </div>
      ))}
    </div>
  );
};

export default AugmentedRealityMenuContent;
