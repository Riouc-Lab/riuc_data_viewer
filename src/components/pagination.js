// components/Pagination.jsx
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <nav aria-label="Page navigation" className="flex justify-center">
      <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        <button
          className="flex items-center justify-center px-2 sm:px-3 h-8 leading-tight text-black hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          <svg className="w-2.5 h-2.5" viewBox="0 0 6 10" fill="none">
            <path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={
              currentPage === index + 1
                ? "flex items-center justify-center px-2 sm:px-3 h-8 text-white bg-red-500 hover:bg-red-600 min-w-[32px]"
                : "flex items-center justify-center px-2 sm:px-3 h-8 text-black hover:bg-gray-100 hover:text-gray-700 min-w-[32px] border-l border-gray-300"
            }
            onClick={() => {
              console.log("Clic en página:", index + 1);
              onPageChange(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="flex items-center justify-center px-2 sm:px-3 h-8 text-black hover:bg-gray-100 hover:text-gray-700 border-l border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <svg className="w-2.5 h-2.5" viewBox="0 0 6 10" fill="none">
            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
