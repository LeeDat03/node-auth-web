"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { API_REQUEST } from "@/constants/fetch-request";

const Page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      // const token = ;

      const res = await fetch(`${API_REQUEST}/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer }`,
        },
        credentials: "include",
      });
      const data = await res.json();

      console.log(data);
      return data;
    },
  });

  return <div>hello</div>;
};

export default Page;
