import Link from "next/link";
import React from "react";

export default function Card({ name, index }) {
  return (
    <Link href={`/${index}`} className='card'>
      <p>{name || "??"}</p>
    </Link>
  );
}
