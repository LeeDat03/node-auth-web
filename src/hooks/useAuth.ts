// "use client";

// import { API_REQUEST } from "@/constants/fetch-request";
// import { useQuery } from "@tanstack/react-query";
// import Cookies from "js-cookie";

// const fetchUser = async () => {
//   const token = Cookies.get("token");

//   if (!token) {
//     throw new Error("No token provided");
//   }

//   const res = await fetch(`${API_REQUEST}/auth/me`, {
//     credentials: "include", // Ensure credentials are included
//   });

//   if (res.status !== "success") {
//     throw new Error("Failed to verify token");
//   }

//   return;
// };
