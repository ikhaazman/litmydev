import React from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { useState } from "react";

type Props = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};

function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}: Props) {
  const pageNumbers: number[] = [];
  const [currentSlice, setCurrentSlice] = useState(0);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-16">
      <div className="-mt-px flex w-0 flex-1">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          hidden={currentPage === pageNumbers[0]}
        >
          <LuArrowLeft
            aria-hidden="true"
            className="mr-3 h-5 w-5 text-gray-400"
          />
          Previous
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <button
          onClick={() => setCurrentSlice(currentSlice - 3)}
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
          hidden={currentSlice === 0}
        >
          ...
        </button>
        {pageNumbers.slice(currentSlice, currentSlice + 3).map((number) => (
          <button
            onClick={() => paginate(number)}
            className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700 ${
              currentPage === number
                ? "text-primary-700 border-primary-300"
                : "text-gray-500"
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => setCurrentSlice(currentSlice + 3)}
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
          hidden={
            pageNumbers
              .slice(pageNumbers.length - 3, pageNumbers.length)
              .includes(currentSlice) ||
            currentSlice >= pageNumbers[pageNumbers.length - 1] ||
            pageNumbers.length === 1
          }
        >
          ...
        </button>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          onClick={() => paginate(currentPage + 1)}
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          hidden={currentPage === pageNumbers[pageNumbers.length - 1]}
        >
          Next
          <LuArrowRight
            aria-hidden="true"
            className="ml-3 h-5 w-5 text-gray-400"
          />
        </button>
      </div>
    </nav>
  );
}

export default Pagination;
