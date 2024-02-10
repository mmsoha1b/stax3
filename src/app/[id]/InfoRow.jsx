import React from "react";

export default function InfoRow({ infoKey, value, ...props }) {
  return (
    <div
      className='flex justify-between w-full md:w-1/2 xl:w-1/4 items-center gap-6 capitalize'
      {...props}
    >
      <h2 className='text-3xl text-star-wars-yellow'>{infoKey || "??"}</h2>
      <p className='text-white text-xl text-right'>{value || "??"}</p>
    </div>
  );
}
