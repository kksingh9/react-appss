import {
  HomeIcon,
  BookDashedIcon,
  LogOut,
  InfoIcon,
  TagIcon,
  GroupIcon,
  SettingsIcon,
  ThumbsUpIcon,
  Clock4Icon,
  LineChartIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  MapIcon,
  SearchIcon,
  DessertIcon
} from "lucide-react";
export const sidesData = [
  {
    icons: <HomeIcon />,
    data: "Home",
  },
  {
    icons: <BookDashedIcon />,
    data: "Projects",
  },
  {
    icons: <TagIcon />,
    data: "Tasks",
  },
  {
    icons: <GroupIcon />,
    data: "Team",
  },
  {
    icons: <SettingsIcon />,
    data: "Settings",
  },
];

export const sideFooter = [
  {
    icons: <InfoIcon />,
    data: "Help & information",
  },
  {
    icons: <LogOut />,
    data: "log out",
  },
];


export const trackData = [
  {
    icon: <ThumbsUpIcon className="w-6 h-6 text-gray-700" />,
    label: "Finished",
    value: "18",
    delta: "+8 tasks",
    deltaColor: "text-emerald-500",
    arrow: <ArrowDownIcon className="w-4 h-4 text-emerald-500" />,
  },
  {
    icon: <Clock4Icon className="w-6 h-6 text-gray-700" />,
    label: "Tracked",
    value: "31h",
    delta: "-6 hours",
    deltaColor: "text-red-500",
    arrow: <ArrowUpIcon className="w-4 h-4 text-red-500 rotate-180" />,
  },
  {
    icon: <LineChartIcon className="w-6 h-6 text-gray-700" />,
    label: "Efficiency",
    value: "93%",
    delta: "+12%",
    deltaColor: "text-emerald-500",
    arrow: <ArrowDownIcon className="w-4 h-4 text-emerald-500" />,
  },
];

export const currentData = [
  {
    icons: <SearchIcon />,
    data: "UX Research for Product",
    status: "On hold",
    dotColor: "#3B82F6", 
    hours: "8h",
    bgColor: "#FEF3C7", 
  },
  {
    icons: <MapIcon/>,
    data: "Product Review for UI8 Market",
    status: "In progress",
    dotColor: "#F59E0B",
    hours: "4h",
    bgColor: "#E0F2FE",
  },
  {
    icons: <DessertIcon/>,
    data: "App design and development",
    status: "Done",
    dotColor: "#10B981",
    hours: "32h",
    bgColor: "#F3F4F6",
  },
];

export const lowerRightData = [
    {
        name: "Floyd Miles",
        project: "Stark Project",
        hours:"10:15 AM",
        comment:"Hi! Next week we'll start a new project I'tell you all the details later"
    },

    {
        name: "Guy Hawkins",
        project: "Stark Project",
        hours:"10:15 AM",
        comment:"Hi! Next week we'll start a new project I'tell you all the details later"
    },
    {
        name: "Kristin Watson",
        project: "7Heros Project",
        hours:"10:15 AM",
        comment:""
    },

]

export const timeRange = ["Day", "Week", "Month"];