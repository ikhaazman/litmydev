import React from "react";
import { Text } from "@chakra-ui/react";
import { LuMoonStar } from "react-icons/lu";

type Props = {
  dataDirectory: any;
};

function DirectoryCard({ dataDirectory }: Props) {
  return (
    <div>
      <div className="group relative h-48 flex items-center justify-center shadow-md bg-white rounded-md">
        <p>{dataDirectory.name}</p>
      </div>
    </div>
  );
}

export default DirectoryCard;
