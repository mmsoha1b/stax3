import React, { useState } from "react";
import useSWR from "swr";
import { snakeToCapitalized } from "@/utils/wordFormat";
import {
  filmKeys,
  planetKeys,
  speciesKeys,
  starShipKeys,
  vehicleKeys,
} from "@/utils/dataKeys";
import ExtraInfo from "./ExtraInfo";
import LoadingComponent from "@/components/Loading";

export default function ExtraInfoModal({ dataSource }) {
  const [dataLink, setDataLink] = useState(
    typeof dataSource.link === "string" ? dataSource.link : ""
  );
  const { data, error } = useSWR(dataLink);
  const updateDataLink = (value) => {
    setDataLink(value);
  };
  if (!dataLink) {
    return (
      <>
        <ul className='p-4 flex flex-col items-center flex-wrap h-full'>
          {dataSource.link.map((value, index) => {
            return (
              <li className='flex justify-between'>
                <button
                  className='text-star-wars-yellow text-[4rem]'
                  onClick={() => updateDataLink(value)}
                >
                  {snakeToCapitalized(
                    dataSource.name.slice(0, dataSource.name.length - 1)
                  )}{" "}
                  {index + 1}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  if (!data) return <LoadingComponent />;

  if (error) return <p className='text-3xl text-star-wars-yellow'>Error</p>;

  let keys = [];
  switch (dataSource.name) {
    case "homeworld":
      keys = planetKeys;
      break;
    case "vehicles":
      keys = vehicleKeys;
      break;
    case "starships":
      keys = starShipKeys;
      break;
    case "species":
      keys = speciesKeys;
      break;
    case "films":
      keys = filmKeys;
      break;
  }

  return <ExtraInfo name={dataSource.name} keys={keys} data={data} />;
}
