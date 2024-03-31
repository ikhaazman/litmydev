import {
  LuBrainCircuit,
  LuKey,
  LuCode2,
  LuBarChart3,
  LuBug,
  LuPalette,
  LuCloudCog,
  LuMicroscope,
  LuNetwork,
  LuGanttChartSquare,
  LuHeadphones,
} from "react-icons/lu";

interface ProjectDataItems {
  is_ready: boolean;
  title: string;
  link: string;
  presenter_url: string;
  presenter_name: string;
  icon_to_use: any;
}
const ProjectData: ProjectDataItems[] = [
  {
    is_ready: true,
    title: "Starting a career in Software Development",
    link: "link1",
    presenter_url: "link directories 1",
    presenter_name: "Nabilah Zaid",
    icon_to_use: <LuCode2 />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 2",
    presenter_url: "link directories 2",
    presenter_name: "person 2",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 3",
    link: "link3",
    presenter_url: "link directories 3",
    presenter_name: "person 3",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 4",
    link: "link 4",
    presenter_url: "link directories 4",
    presenter_name: "person 5",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 5",
    link: "link5",
    presenter_url: "link directories 5",
    presenter_name: "person 5",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 6",
    presenter_url: "link directories 6",
    presenter_name: "person 6",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 1",
    link: "link1",
    presenter_url: "link directories 1",
    presenter_name: "person 1",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 2",
    presenter_url: "link directories 2",
    presenter_name: "person 2",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 3",
    link: "link3",
    presenter_url: "link directories 3",
    presenter_name: "person 3",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 4",
    link: "link 4",
    presenter_url: "link directories 4",
    presenter_name: "person 5",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 5",
    link: "link5",
    presenter_url: "link directories 5",
    presenter_name: "person 5",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 6",
    presenter_url: "link directories 6",
    presenter_name: "person 6",
    icon_to_use: <LuKey />,
  },
  {
    is_ready: false,
    title: "title 1",
    link: "link1",
    presenter_url: "link directories 1",
    presenter_name: "person 1",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 2",
    presenter_url: "link directories 2",
    presenter_name: "person 2",
    icon_to_use: <LuBug />,
  },
  {
    is_ready: false,
    title: "title 3",
    link: "link3",
    presenter_url: "link directories 3",
    presenter_name: "person 3",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 4",
    link: "link 4",
    presenter_url: "link directories 4",
    presenter_name: "person 5",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 5",
    link: "link5",
    presenter_url: "link directories 5",
    presenter_name: "person 5",
    icon_to_use: <LuGanttChartSquare />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 6",
    presenter_url: "link directories 6",
    presenter_name: "person 6",
    icon_to_use: <LuBarChart3 />,
  },
  {
    is_ready: false,
    title: "title 1",
    link: "link1",
    presenter_url: "link directories 1",
    presenter_name: "person 1",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 2",
    presenter_url: "link directories 2",
    presenter_name: "person 2",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 3",
    link: "link3",
    presenter_url: "link directories 3",
    presenter_name: "person 3",
    icon_to_use: <LuPalette />,
  },
  {
    is_ready: false,
    title: "title 4",
    link: "link 4",
    presenter_url: "link directories 4",
    presenter_name: "person 5",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 5",
    link: "link5",
    presenter_url: "link directories 5",
    presenter_name: "person 5",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 6",
    presenter_url: "link directories 6",
    presenter_name: "person 6",
    icon_to_use: <LuHeadphones />,
  },
  {
    is_ready: false,
    title: "title 1",
    link: "link1",
    presenter_url: "link directories 1",
    presenter_name: "person 1",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 2",
    presenter_url: "link directories 2",
    presenter_name: "person 2",
    icon_to_use: <LuBrainCircuit />,
  },
  {
    is_ready: false,
    title: "title 3",
    link: "link3",
    presenter_url: "link directories 3",
    presenter_name: "person 3",
    icon_to_use: <LuNetwork />,
  },
  {
    is_ready: false,
    title: "title 4",
    link: "link 4",
    presenter_url: "link directories 4",
    presenter_name: "person 5",
    icon_to_use: <LuMicroscope />,
  },
  {
    is_ready: false,
    title: "title 5",
    link: "link5",
    presenter_url: "link directories 5",
    presenter_name: "person 5",
    icon_to_use: <LuCloudCog />,
  },
  {
    is_ready: false,
    title: "title 2",
    link: "link 6",
    presenter_url: "link directories 6",
    presenter_name: "person 6",
    icon_to_use: <LuBrainCircuit />,
  },
];

export default ProjectData;