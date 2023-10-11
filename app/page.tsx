"use client";

import { useEffect } from "react";

import AppTable from "@/components/app.table";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");

      const data = await res.json();

      console.log("data", data);
    };

    fetchData();
  }, []);

  return (
    <div className='py-4'>
      <AppTable />
    </div>
  );
};

export default Home;
