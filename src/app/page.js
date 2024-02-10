"use client";
import Card from "@/components/Card";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import useSWR from "swr";
import LoadingComponent from "@/components/Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/?page=${pageNumber + 1}`,
    fetcher
  );
  if (error) return <p className='text-star-wars-yellow'>Error</p>;
  if (isLoading) return <LoadingComponent />;

  const handlePageChange = (pageData) => {
    if (pageData.isNext && data.next) {
      setPageNumber(pageNumber + 1);
      return;
    } else if (pageData.isPrevious && data.previous) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <main className='p-8'>
      <h1 className='text-star-wars-yellow font-bold text-center mb-2 text-[4rem]'>
        SWAPI
      </h1>
      <section className='flex flex-wrap justify-center gap-4 mb-4'>
        {data.results.map((person, index) => {
          return (
            <Card
              name={person.name}
              key={index}
              index={pageNumber * 10 + index + 1}
            />
          );
        })}
      </section>
      <ReactPaginate
        previousLabel='Prev'
        nextLabel='Next'
        containerClassName='flex justify-center'
        activeClassName='active bg-star-wars-yellow text-black font-bold'
        previousClassName={`mx-2 py-1 text-star-wars-yellow px-3 rounded-lg border border-gray-300 ${
          data.previous
            ? "hover:bg-star-wars-yellow hover:text-black hover:font-bold"
            : "disabled"
        }`}
        nextClassName={`mx-2 py-1 px-3 text-star-wars-yellow rounded-lg border border-gray-300 ${
          data.next
            ? "hover:bg-star-wars-yellow hover:text-black hover:font-bold"
            : "disabled"
        }`}
        onClick={handlePageChange}
        breakClassName='mx-2 py-1 px-3  text-star-wars-yellow rounded-lg border border-gray-300 hover:bg-star-wars-yellow hover:text-black hover:font-bold'
        pageClassName='mx-2 py-1 px-3 text-star-wars-yellow rounded-lg border border-gray-300 hover:bg-star-wars-yellow hover:text-black hover:font-bold'
        disabledClassName='disabled'
      />
    </main>
  );
}
