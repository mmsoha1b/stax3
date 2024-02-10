"use client";
import React, { useState } from "react";
import InfoRow from "./InfoRow";
import Modal from "react-modal";
import ExtraInfoModal from "./ExtraInfoContainer";
import useSWR from "swr";
import LoadingComponent from "@/components/Loading";

Modal.setAppElement("#modals");

export default function Person({ params }) {
  let { id } = params;

  // Offseting due to a bug in the api
  if (Number(id) > 17) {
    id = Number(id) + 1;
  }
  const [modalDataSource, setModalDataSource] = useState({
    link: "",
    name: "",
  });

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (isLoading) return <LoadingComponent />;
  if (error || !Number(id))
    return (
      <p className='text-star-wars-yellow text-center font-extrabold text-[5rem]'>
        Error
      </p>
    );

  const openModal = (e) => {
    setModalDataSource({ link: data[e.target.name], name: e.target.name });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className='p-4'>
        <h1 className='text-star-wars-yellow font-extrabold text-[4rem]  mb-8 text-center'>
          {data?.name}
        </h1>
        <div className='flex flex-col gap-8 items-center'>
          <InfoRow value={data?.height} infoKey={"height"} />
          <InfoRow value={data?.mass} infoKey={"mass"} />
          <InfoRow value={data?.hair_color} infoKey={"Hair Color"} />
          <InfoRow value={data?.skin_color} infoKey={"Skin Color"} />
          <InfoRow value={data?.eye_color} infoKey={"Eye Color"} />
          <InfoRow value={data?.birth_year} infoKey={"Birth Year"} />
          <InfoRow value={data?.gender} infoKey={"Gender"} />

          <div className='flex flex-wrap gap-4  items-center justify-center'>
            {data.homeworld && (
              <button
                name='homeworld'
                className='px-8 py-2 bg-star-wars-yellow rounded-md text-lg font-bold '
                onClick={openModal}
              >
                Homeworld
              </button>
            )}
            {data.films?.length > 0 && (
              <button
                onClick={openModal}
                name='films'
                className='px-8 py-2 bg-star-wars-yellow rounded-md text-lg font-bold'
              >
                Films
              </button>
            )}
            {data.species?.length > 0 && (
              <button
                onClick={openModal}
                name='species'
                className='px-8 py-2 bg-star-wars-yellow rounded-md text-lg font-bold '
              >
                Species
              </button>
            )}
            {data.vehicles?.length > 0 && (
              <button
                onClick={openModal}
                name='vehicles'
                className='px-8 py-2 bg-star-wars-yellow rounded-md text-lg font-bold'
              >
                Vehicles
              </button>
            )}
            {data.starships?.length > 0 && (
              <button
                onClick={openModal}
                name='starships'
                className='px-8 py-2 bg-star-wars-yellow rounded-md text-lg font-bold'
              >
                Starships
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={`absolute top-1/2 left-1/2 bg-black  px-2 md:p-4 transform -translate-x-1/2 -translate-y-1/2
        h-2/3 w-[95%] md:h-1/2 md:w-2/3 overflow-auto rounded-xl`}
        contentLabel='My Modal'
      >
        <ExtraInfoModal dataSource={modalDataSource} />
      </Modal>
    </>
  );
}
