import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import Drawer from "../../components/Drawer/Drawer";
import {
  HomeLoggedContainer
} from "../../styles/HomeLogged";
import Classes from "../Class";
import Locks from "../Locks";
import Rooms from "../Rooms";
import Students from "../Students";
import Teachers from "../Teachers";

export default function HomeLogged() {
  const history = useNavigate();
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleButtonClick = (buttonIndex: number) => {
    history(`/home?tab=${buttonIndex}`);
    setSelectedTab(buttonIndex);
  };

  const pages = [
    <Rooms />,
    <Teachers />,
    <Classes />,
    <Locks />,
    <Students />,
  ]

  return (
    <HomeLoggedContainer>
      <Toaster richColors />
      <Drawer selectedTab={selectedTab} handleButtonClick={handleButtonClick} />
      {pages[selectedTab - 1]}
    </HomeLoggedContainer>
  );
}
