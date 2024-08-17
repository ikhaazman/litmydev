import React from "react";
import MainLayout from "../../layouts/mainLayout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import DirectoryData from "./directoryData";
import DirectoryCard from "./directoryCard";

type Props = {};

function Directories(_props: Props) {
  return (
    <MainLayout>
      <div className="flex flex-col gap-y-12">
        <div className="text-center pt-40">
          <header className="text-5xl font-poppins font-bold text-primary-700">
            Directories
          </header>
          <p className="text-secondary-700 text-2xl tracking-tight font-manrope font-normal pt-5">
            Meet our amazing ladies in tech
          </p>
        </div>
        <div className="px-48 ">
          <Tabs>
            <TabList className="font-poppins font-medium text-secondary-800">
              <Tab>All Members</Tab>
              <Tab>Organisation</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="text-primary-800"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <p
                  data-belle="lit"
                  className="data-[belle=lit]:text-secondary-300"
                >
                  MEMMMMMMBEERRRSSS
                </p>

                {Array.from({ length: DirectoryData.length }, (_, index) => {
                  const project = DirectoryData[index];
                  return <DirectoryCard dataDirectory={project} key={index} />;
                })}
              </TabPanel>
              <TabPanel>
                <p>ORGGGGGGANISATION</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div className=""></div>
      </div>
    </MainLayout>
  );
}

export default Directories;
