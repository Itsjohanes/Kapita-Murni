import React from "react";

const Policy = () => {
  const handleNextClick = () => {
    window.location.href = "./overview";
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-2xl mb-4 bg-white shadow-md rounded-md ">
        <div className="text-center font-bold font-sans text-xl capitalize relative ">
          <img
            className="filter saturate-50 rounded-t-md w-full h-96 object-cover "
            src="/privacy.jpg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-black text-2xl rounded-lg border px-4 py-2 font-bold bg-white">
              Privacy & Policy
            </p>
          </div>
        </div>
        <div className="p-6 font-sans text-justify">
          <h1 className="font-bold lg:text-lg">
            <strong>Kebijakan Privasi untuk Media Sistem Pernafasan</strong>
          </h1>

          <p className="my-2">
            Di Media Sistem Pernafasan, dapat diakses dari{" "}
            <a
              href="https://kel1-kapita.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://kel1-kapita.vercel.app/
            </a>
            , salah satu prioritas utama kami adalah privasi pengunjung kami.
            Dokumen Kebijakan Privasi ini berisi jenis informasi yang
            dikumpulkan dan dicatat oleh Media Sistem Pernafasan dan bagaimana
            kami menggunakannya. Jika Anda memiliki pertanyaan tambahan atau
            memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami,
            jangan ragu untuk menghubungi kami.
          </p>

          <h2 className="font-bold lg:text-lg">
            <strong>Log Files</strong>
          </h2>
          <p className="my-2">
            Media Sistem Pernafasan mengikuti prosedur standar penggunaan file
            log. File-file ini mencatat pengunjung ketika mereka mengunjungi
            situs web.
          </p>

          <h2 className="font-bold lg:text-lg">
            <strong>Kebijakan Privasi Pihak Ketiga</strong>
          </h2>
          <p className="my-2">
          Perlu diingat bahwa Media Sistem Pernafasan tidak memiliki akses
              atau kontrol atas cookie ini yang digunakan oleh pengiklan pihak
              ketiga.
          </p>
        </div>

        {/* Sisanya diubah menjadi list sesuai struktur yang serupa */}
        <div className="w-full flex justify-center items-center mt-4 mb-8">
          <button
            className="bg-button text-black border font-bold py-2 px-4 rounded "
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

export default Policy;
