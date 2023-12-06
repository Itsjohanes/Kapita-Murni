import React from "react";

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center m-4">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-full mb-2"
      />
      <h2 className="text-sm font-semibold">{name}</h2>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  );
};

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Johannes Alexander Putra",
      role: "Web Developer",
      image: "./johanes.PNG",
    },
    {
      name: "Azhar Arrozak",
      role: "Web Developer",
      image: "./azhar.jpg",
    },
    {
      name: "Hafil Sukamto",
      role: "Material Writter",
      image: "./hafil.jpg",
    },
  ];

  const appExplanation = (
    <p className="text-xs text-justify text-gray-700 mt-4">
      Aplikasi media pembelajaran ilmu pengetahuan alam yang inovatif ini
      dirancang khusus untuk siswa kelas 8 SMP yang sedang menjelajahi
      kompleksitas sistem organ tubuh, dengan fokus utama pada sistem
      pernafasan. Melalui modul-modul interaktif yang mencakup teks informatif,
      gambar visual yang memukau, dan teknologi augmented reality yang memukau,
      aplikasi ini tidak hanya memberikan pemahaman mendalam tentang kerja
      intricat organ-organ pernafasan, tetapi juga menghadirkan pengalaman
      belajar yang seru dan memikat. Dengan menggunakan kombinasi pendekatan
      pembelajaran yang menyenangkan dan teknologi canggih, siswa tidak hanya
      akan memahami konsep-konsep ilmiah dengan lebih baik, tetapi juga akan
      terinspirasi untuk mengeksplorasi lebih dalam dalam dunia ajaib organ
      tubuh manusia.
    </p>
  );

  return (
    <div className="p-4 md:px-8 lg:px-16 xl:px-32">
      <h1 className="text-center text-2xl lg:text-3xl font-semibold mb-4">
        About Us
      </h1>
      <div className="flex justify-center items-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      {appExplanation}
    </div>
  );
};

export default AboutUs;
