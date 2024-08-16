import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { LuMoonStar } from "react-icons/lu";
import ProjectModal from "./projectModal";

type Props = {
  dataProject: any;
  day: number;
};

function ProjectCard({ dataProject, day }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onProjectModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="group relative h-48 flex items-center justify-center shadow-xl bg-white opacity-90 rounded-xl border border-gray-200">
      <Text className="font-poppins text-xl font-extrabold text-primary-700 absolute left-5 top-5 group-hover:opacity-50">{`DAY ${day}`}</Text>
      {dataProject.is_ready && (
        <>
          <div className="group-hover:opacity-50">
            <div className="text-3xl opacity-50 absolute right-5 top-5">
              {dataProject.icon_to_use}
            </div>
            <div className="px-5 leading-tight">
              <Text className="font-semibold">{dataProject.title}</Text>
            </div>
            <div className="absolute bottom-3 right-5 ">
              <em>{dataProject.presenter_name} </em>
            </div>
          </div>

          <div className="opacity-0 group-hover:opacity-100 absolute">
            <button
              className="rounded-lg px-5 py-2 bg-primary-700 flex flex-row items-center"
              onClick={onProjectModal}
            >
              <LuMoonStar className="text-white" />
              <Text className="ml-2 text-white">More</Text>
            </button>
          </div>
          <ProjectModal
            isOpen={isOpen}
            onProjectModal={onProjectModal}
            dataProject={dataProject}
          />
        </>
      )}

      {!dataProject.is_ready && (
        <div>
          <Text>Coming Soon</Text>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
