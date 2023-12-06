const Programs = () => {
  return (
    <div className="p-4 md:px-8 lg:px-16 xl:px-32">
      <h1 className="text-center text-2xl lg:text-3xl font-bold my-8">Fitur Menarik</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        <div className="bg-primary px-4 py-8 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full"
              src="/book.png"
              alt="placeholder"
              width="150"
              height="150"
            />
            <h2 className="text-center text-xl font-bold my-2">Materi</h2>
            <p className="text-center">
              Materi yang diberikan ringkas dan menarik untuk dipelajari dan
              sesuai dengan kurikulum merdeka
            </p>
          </div>
        </div>
        <div className="bg-black text-white px-4 py-8 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full"
              src="/bronkus.png"
              alt="placeholder"
              width="150"
              height="150"
            />
            <h2 className="text-center text-xl font-bold my-2">Gambar 2D</h2>
            <p className="text-center">
              Materi dilengkapi dengan gambar-gambar untuk memudahkan
              visualisasi materi
            </p>
          </div>
        </div>
        <div className="bg-secondary px-4 py-8 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full"
              src="/lung.jpeg"
              alt="placeholder"
              width="150"
              height="150"
            />
            <h2 className="text-center text-xl font-bold my-2">
              Virtual Reality
            </h2>
            <p className="text-center">
              Media Pembelajaran ini menyediakan Fitur Virtual Reality Berupa
              Galeri Sistem Pernafasan
            </p>
          </div>
        </div>
        <div className="bg-gray px-4 py-8 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full"
              src="/AR.jpg"
              alt="placeholder"
              width="150"
              height="150"
            />
            <h2 className="text-center text-xl font-bold my-2">AR</h2>
            <p className="text-center">
              Media Pembelajaran ini menyediakan Augmented Reality untuk
              memudahkan visualisasi materi yang dipelajari dengan menampilkan
              model 3D
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
