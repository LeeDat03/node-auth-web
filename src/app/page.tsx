"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  router.push("/login");

  return <div>Hello</div>;
};

export default Page;
