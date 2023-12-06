/* eslint-disable react/prop-types */
import {useState} from 'react'

const MateriTemplate = ({data}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const goToPage = (pageIndex) => {
        setCurrentPage(pageIndex);
      };
    
      const goToNextPage = () => {
        setCurrentPage((prevPage) =>
          prevPage === data.length - 1 ? 0 : prevPage + 1
        );
      };
    
      const goToPrevPage = () => {
        setCurrentPage((prevPage) =>
          prevPage === 0 ? data.length - 1 : prevPage - 1
        );
      };


  return (
    <div className="flex flex-col lg:flex-row">
      {/* Konten utama */}
      <div className="w-full lg:w-5/6 p-4 mr-4 bg-secondary rounded-md">
        {data.map((page, index) => (
          <div
            key={page.id}
            className={`page ${index === currentPage ? "block" : "hidden"}`}
          >
            <h3 className="text-xl font-bold mb-4">{page.judul}</h3>
            {page.image && (
              <img
                src={page.image}
                alt={`Gambar ${page.id}`}
                className="object-cover max-w-full max-h-96 mb-4"
              />
            )}
            {page.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="text-xl mb-2 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Navigasi samping di sebelah kanan */}
      <div className="w-full lg:w-1/6 p-4 bg-gray lg:mt-0 mt-2 rounded-md" style={{height: "fit-content"}}>
        <h3 className="text-xl font-bold mb-4 block lg:hidden">Halaman {currentPage +1 }</h3>
        <ul className="hidden lg:flex flex-col">
          {data.map((page, index) => (
            <li
              key={page.id}
              className={` justify-center text-center text-xl cursor-pointer ${
                index === currentPage ? "font-semibold" : ""
              }`}
              onClick={() => goToPage(index)}
            >
              {`Halaman ${index + 1}`}
            </li>
          ))}
        </ul>
        <div className="mt-4 w-full flex justify-between lg:justify-start">
          <button
            onClick={goToPrevPage}
            className="bg-button text-black border w-1/2 font-semibold py-2 px-4 rounded mr-2"
          >
            Prev
          </button>
          <button
            onClick={goToNextPage}
            className="bg-button text-black border w-1/2 font-semibold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MateriTemplate