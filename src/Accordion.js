import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { MdHighQuality } from "react-icons/md";
import { SiAwssecretsmanager } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
const accordion = [
    {
        value: "Best rate for premium apartment",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut impedit temporibus cupiditate ipsam tempora debitis iure quidem. Dicta, optio atque.",
        id:1,
        icons: {/* <MdHighQuality/> */} ,
        closeIcon:{/* <IoIosArrowDown/> */},
        checked: false
    },
    {
        value: "Apartments all over 60 countries of the world",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut impedit temporibus cupiditate ipsam tempora debitis iure quidem. Dicta, optio atque.",
        id:2,
        icons: {/* <BsGlobeAsiaAustralia/> */},
        closeIcon:{/* <IoIosArrowDown/> */},
        checked: false
    },
    {
        value: "Your privacy and lesiure is our priority",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut impedit temporibus cupiditate ipsam tempora debitis iure quidem. Dicta, optio atque.",
        id:3,
        icons: {/* <SiAwssecretsmanager/> */},
        closeIcon:{/* <IoIosArrowDown/> */},
        checked: false
    }
]

export default accordion