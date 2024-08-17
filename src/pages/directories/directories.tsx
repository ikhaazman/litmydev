import { useState } from "react";
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
import Pagination from "../../components/pagination";

function Directories() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DirectoryData.slice(indexOfFirstItem, indexOfLastItem);
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
        <div className="xl:px-48 lg:px-36 md:px-28 max-md:px-12 mb-10">
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
                {/* <p
                  data-belle="lit"
                  className="data-[belle=lit]:text-secondary-300"
                >
                  MEMMMMMMBEERRRSSS
                </p> */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-10 gap-4 mb-4">
                  {/* {Array.from({ length: DirectoryData.length }, (_, index) => {
                    const project = DirectoryData[index];
                    return (
                      <DirectoryCard dataDirectory={project} key={index} />
                    );
                  })} */}
                  {currentItems.map((item, i) => (
                    <DirectoryCard dataDirectory={item} key={i} />
                  ))}
                </div>
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={DirectoryData.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
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
