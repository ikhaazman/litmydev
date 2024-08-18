import React from "react";
import { LuLink } from "react-icons/lu";
import { SiDiscord, SiTiktok, SiX, SiYoutube } from "react-icons/si";

type Props = {
  dataOrganisation: any;
};

function OrganisationCard({ dataOrganisation }: Props) {
  return (
    <div className="group relative h-auto flex flex-col text-left justify-center">
      <div className="w-100 h-56 flex rounded-lg border border-primary-900/10">
        <img
          src={dataOrganisation.img_url}
          alt={dataOrganisation.name}
          className="rounded-lg object-cover h-full w-full "
        />
      </div>
      <p className="text-2xl font-bold mt-3 pb-3">{dataOrganisation.name}</p>
      <p className="text-xs pb-3">{dataOrganisation.intro}</p>
      <div className="flex flex-row gap-3 items-center">
        {dataOrganisation.site_url && (
          <a
            href={dataOrganisation.site_url}
            target="_blank"
            rel="noopener noreferer"
            className="hover:text-blue-800 text-sm"
          >
            <LuLink />
          </a>
        )}
        {dataOrganisation.discord_url && (
          <a
            href={dataOrganisation.discord_url}
            target="_blank"
            rel="noopener noreferer"
            className="hover:text-purple-900 text-sm"
          >
            <SiDiscord />
          </a>
        )}
        {dataOrganisation.twitter_url && (
          <a
            href={dataOrganisation.twitter_url}
            target="_blank"
            rel="noopener noreferer"
            className="hover:text-gray-800 text-sm"
          >
            <SiX />
          </a>
        )}
        {dataOrganisation.youtube_url && (
          <a
            href={dataOrganisation.youtube_url}
            target="_blank"
            rel="noopener noreferer"
            className="hover:text-red-800 text-lg"
          >
            <SiYoutube />
          </a>
        )}
        {dataOrganisation.tiktok_url && (
          <a
            href={dataOrganisation.tiktok_url}
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

export default OrganisationCard;
