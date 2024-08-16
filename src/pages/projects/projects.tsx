import React from "react";
import MainLayout from "../../layouts/mainLayout";
import ProjectCard from "./projectCard";
import ProjectData from "./projectData";
import { IMAGES } from "../../assets";

type Props = {};

function Projects(_props: Props) {
  return (
    <MainLayout>
      {/* <img src={IMAGES.rayaBg1} className="w-full -z-50 relative" /> */}
      <div
        className="flex flex-col gap-y-12"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${IMAGES.projectBg1})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `fit`,
          backgroundPosition: `center`,
        }}
      >
        <div className="text-center pt-40">
          <header className="text-5xl max-sm:px-10 font-poppins font-bold text-primary-700">
            30 Hari 30 Tech Sharing
          </header>
          <p className="text-secondary-700 max-sm:px-10 text-2xl tracking-tight font-manrope font-normal pt-5">
            Special sharing by our amazing LIT members
          </p>
        </div>
        <div className="lg:px-48 md:px-28 max-md:px-12 mb-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-sm:flex-1 max-sm:gap-x-10 gap-4">
            {Array.from({ length: ProjectData.length }, (_, index) => {
              const project = ProjectData[index];
              return (
                <ProjectCard
                  dataProject={project}
                  day={index + 1}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Projects;
