"use client";

import useSWR from "swr";

import AppTable from "@/components/app.table";

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-4'>
      <div>{data?.length}</div>

      <AppTable blogs={data} />
    </div>
  );
};

export default Home;
