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
import OrganisationData from "./organisationData";
import OrganisationCard from "./organisationCard";

function Directories() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 9;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DirectoryData.slice(indexOfFirstItem, indexOfLastItem);

  const [currentPageOrg, setCurrentPageOrg] = useState<number>(1);
  const itemsPerPageOrg: number = 6;

  const paginateOrg = (pageNumber: number) => setCurrentPageOrg(pageNumber);

  const indexOfLastItemOrg = currentPageOrg * itemsPerPageOrg;
  const indexOfFirstItemOrg = indexOfLastItemOrg - itemsPerPageOrg;
  const currentItemsOrg = OrganisationData.slice(
    indexOfFirstItemOrg,
    indexOfLastItemOrg
  );

  const heading = [
    "Meet our amazing ladies in tech",
    "Meet our amazing partners",
  ];
  const [tabIndex, setTabIndex] = useState(0);
  const currentHeading = heading[tabIndex];
  return (
    <MainLayout>
      <div className="flex flex-col gap-y-12">
        <div className="text-center pt-40">
          <header className="text-5xl font-poppins font-bold text-primary-700">
            Directories
          </header>
          <p className="text-secondary-700 text-2xl tracking-tight font-manrope font-normal pt-5">
            {currentHeading}
          </p>
        </div>
        <div className="xl:px-48 lg:px-36 md:px-28 max-md:px-12 mb-10">
          <Tabs colorScheme="pink" onChange={(index) => setTabIndex(index)}>
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

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-10 gap-4 mb-4 mt-4">
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
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-10 gap-4 mb-4 mt-4">
                  {currentItemsOrg.map((item, i) => (
                    <OrganisationCard dataOrganisation={item} key={i} />
                  ))}
                </div>
                <Pagination
                  itemsPerPage={itemsPerPageOrg}
                  totalItems={OrganisationData.length}
                  paginate={paginate}
                  currentPage={currentPageOrg}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div className=""></div>
      </div>
    </MainLayout>
  );
}

// function handleSelect(key: number) {
//   {
//     1: this.setState({ heading: "Log in" }),
//     2: this.setState({ heading: "Sign up" }),
//     3: this.setState({ heading: "Something Else" }),
//   }[key]
// }

export default Directories;
