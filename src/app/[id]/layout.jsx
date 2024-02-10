"use client";
import React from "react";
import { SWRConfig } from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Layout({ children }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
