"use client";

import { logout } from "@/app/api/action";
import { Button } from "./ui/button";

const UserCard = () => {
  return <Button onClick={logout}>UserCard</Button>;
};

export default UserCard;
