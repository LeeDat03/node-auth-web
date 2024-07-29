import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icon";
import Link from "next/link";
import { API_REQUEST } from "@/constants/fetch-request";

const OauthOption = () => {
  return (
    <div className="my-5">
      <div className="flex items-center justify-center">
        <div className="h-px w-full bg-gray-400 mr-1" />
        <span className="w-full text-sm text-gray-500">Or authorize with</span>
        <div className="h-px w-full bg-gray-400 ml-1" />
      </div>

      <div className="mt-3 flex gap-4">
        <Button
          variant="outline"
          className="flex-1 flex items-center gap-1.5"
          asChild
        >
          <Link href={`${API_REQUEST}/oauth/google`}>
            <Icons.google className="size-5" />
            <span className="text-base">Google</span>
          </Link>
        </Button>

        <Button
          variant="outline"
          className="flex-1 flex items-center gap-1.5"
          asChild
        >
          <Link href={`${API_REQUEST}/oauth/github`}>
            <Icons.github className="size-5" />
            <span className="text-base">Github</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OauthOption;
