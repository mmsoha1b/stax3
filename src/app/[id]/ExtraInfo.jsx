import React from "react";
import InfoRow from "./InfoRow";
import { snakeToCapitalized } from "@/utils/wordFormat";

export default function ExtraInfo({ name, keys, data }) {
  return (
    <div className=''>
      <h2 className='text-star-wars-yellow text-[4rem] font-extrabold text-center mb-4'>
        {snakeToCapitalized(name) || "??"}
      </h2>
      <div className='flex flex-col items-center'>
        {keys.map((rowKey) => {
          const value = data[rowKey];
          const infoKey = snakeToCapitalized(rowKey);
          return (
            <InfoRow
              style={{ width: "100%", marginBottom: "2rem", gap: "2rem" }}
              value={value}
              infoKey={infoKey}
            />
          );
        })}
      </div>
    </div>
  );
}
