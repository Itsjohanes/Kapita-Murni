import React from "react";

const Disclaimer = () => {
  const handleNextClick = () => {
    window.location.href = "./policy";
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-6 mb-4 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-center italic">Disclaimer</h1>
        <p className="text-gray-700 mb-4">
          Media pembelajaran ini disusun oleh Johannes, Azhar, dan Hafil sebagai
          bagian dari proyek pembelajaran. Materi dan informasi yang terdapat
          dalam media ini disusun dengan seksama berdasarkan penelitian dan
          referensi yang relevan pada saat penyusunan.
        </p>
        <p className="text-gray-700 mb-4">
          Pembaca diizinkan untuk mengutip atau menggunakan informasi yang
          terdapat dalam media pembelajaran ini, dengan syarat mencantumkan
          sumber asli dari informasi tersebut. Pengutipan harus dilakukan dengan
          itikad baik dan tidak merubah makna dari informasi tersebut.
        </p>
        <p className="text-gray-700 mb-4">
          Meskipun kami telah berusaha sebaik mungkin untuk menyajikan informasi
          yang akurat dan terkini, pembaca dihimbau untuk selalu memverifikasi
          informasi lebih lanjut dan berkonsultasi dengan sumber-sumber
          terpercaya apabila diperlukan.
        </p>
        <p className="text-gray-700">
          Kami, Johannes, Azhar, dan Hafil, tidak bertanggung jawab atas
          kerugian atau kerusakan yang mungkin timbul dari penggunaan informasi
          yang terdapat dalam media pembelajaran ini. Penggunaan informasi
          adalah tanggung jawab penuh pembaca.
        </p>
        
        <div className="w-full justify-center items-center  flex my-4">
      <button
        className="bg-button text-black border font-bold py-2 px-4 rounded"
        onClick={handleNextClick}
      >
        {" "}
        Next<span className="ml-2">&#8594;</span>
      </button>
      </div>
      </div>
      
    </div>
  );
};

export default Disclaimer;
