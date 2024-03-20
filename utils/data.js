import { CiSettings } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdEvent } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";

export const mainMenu = [
    {
        id: 1,
        name: "Dashboard",
        icon: <MdOutlineDashboard fontSize={25}/>
        
    },
    {
        id: 2,
        name: "Event",
        subNames:[
            "Add new",
            "Check Schedule",
            "Order List"
        ],
        icon: <MdEvent fontSize={25}/>
    },
    {
        id: 3,
        name: "Customer",
        icon: <IoPersonOutline fontSize={25}/>
    },
    {
        id: 4,
        name: "Theater",
        icon: <IoHomeOutline fontSize={25} />
    },
    {
        id: 5,
        name: "Settings",
        icon: <CiSettings fontSize={30} />
    }
]