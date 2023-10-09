"use client";

import { useRouter } from "next/navigation";

const Facebook = () => {
  const router = useRouter();

  const handleBack = () => router.push("/");

  return (
    <div>
      Facebook page
      <button className='ml-2' onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default Facebook;
