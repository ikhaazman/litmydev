import React from "react";
import { Text } from "@chakra-ui/react";
import { LuLinkedin, LuMoonStar, LuX, LuYoutube } from "react-icons/lu";
import { SiLinkedin, SiTiktok, SiX, SiYoutube } from "react-icons/si";

type Props = {
  dataDirectory: any;
};

function DirectoryCard({ dataDirectory }: Props) {
  return (
    <div className="group relative h-auto flex flex-col text-left mb-4">
      <div
        className={`w-100 h-56 flex ${
          dataDirectory.img_url === undefined ||
          dataDirectory.img_url === "" ||
          dataDirectory.img_url === null
            ? "rounded-lg border border-primary-900/10"
            : ""
        }`}
      >
        <img
          src={
            dataDirectory.img_url ??
            "https://img.litmy.dev/icon-lady-placeholder.png"
          }
          alt={dataDirectory.name}
          className={`rounded-lg object-cover h-full w-full `}
        />
        {/* {typeof dataDirectory.img_url} */}
      </div>
      <p className="text-2xl font-bold mt-3 pb-3">{dataDirectory.name}</p>
      <p className="text-xs pb-3">{dataDirectory.intro}</p>
      <p className="text-xs text-primary-700 font-semibold pb-3">
        {dataDirectory.field}
      </p>
      <div className="flex flex-row gap-3 items-center">
        {dataDirectory.linkedin_url && (
          <a
            href={dataDirectory.linkedin_url}
            target="_blank"
            rel="noopener noreferer"
            className="hover:text-blue-800 text-sm"
          >
            <SiLinkedin />
          </a>
        )}
        {dataDirectory.youtube_url && (
          <a
            href={dataDirectory.youtube_url}
            target="_blank"
            rel="noopener noreferer"
            className="hover:text-red-800 text-lg"
          >
            <SiYoutube />
          </a>
        )}
        {dataDirectory.twitter_url && (
          <a
            href={dataDirectory.twitter_url}
            target="_blank"
            rel="noopener noreferer"
            className="hover:text-gray-800 text-sm"
          >
            <SiX />
          </a>
        )}
        {dataDirectory.tiktok_url && (
          <a
            href={dataDirectory.tiktok_url}
            target="_blank"
            rel="noopener noreferer"
            className="hover:text-gray-800 text-sm"
          >
            <SiTiktok />
          </a>
        )}
      </div>
    </div>
  );
}

export default DirectoryCard;
