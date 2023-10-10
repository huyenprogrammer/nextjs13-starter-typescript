"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Facebook = () => {
  const router = useRouter();

  const handleBack = () => router.push("/");

  return (
    <div>
      Facebook page
      <Button>Click me</Button>
      <button className='ml-2' onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default Facebook;
