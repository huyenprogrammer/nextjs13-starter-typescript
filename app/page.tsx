"use client";

import AppTable from "@/components/app.table";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log("data", data);

  return (
    <div className='py-4'>
      <div>{data?.length}</div>

      <AppTable />
    </div>
  );
};

export default Home;
