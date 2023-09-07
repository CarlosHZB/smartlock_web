import {
  DrawerButtons,
  DrawerTitle,
  HomeLoggedContainer,
  LeftDrawer,
  LogoutButton,
  UserId,
  UserInfo,
  UserInfoContainer,
  UserName,
} from "../../styles/HomeLogged";
import { useNavigate } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineBook } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { BiUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import Rooms from "../Rooms";
import Teachers from "../Teachers";
import Students from "../Students";
import Class from "../Class";

export default function HomeLogged() {
  const history = useNavigate();
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleButtonClick = (buttonIndex: number) => {
    history(`/home?tab=${buttonIndex}`);
    setSelectedTab(buttonIndex);
  };

  const pages = [
        <Rooms />,
        <Teachers/>,
        <Students/>,
        <Class/> 
    ]

  return (
    <HomeLoggedContainer>
      <LeftDrawer>
        <DrawerTitle>Smartlock Dashboard</DrawerTitle>
        <DrawerButtons onClick={()=> handleButtonClick(1)} className={selectedTab === 1 ? "active" : ""}>
          <SiGoogleclassroom size={22} /> Salas
        </DrawerButtons>
        <DrawerButtons onClick={()=> handleButtonClick(2)} className={selectedTab === 2 ? "active" : ""}>
          <FaChalkboardTeacher size={22} /> Professores
        </DrawerButtons>
        <DrawerButtons onClick={()=> handleButtonClick(3)} className={selectedTab === 3 ? "active" : ""}>
          <PiStudentBold size={22} /> Alunos
        </DrawerButtons>
        <DrawerButtons onClick={()=> handleButtonClick(4)} className={selectedTab === 4 ? "active" : ""}>
          <MdOutlineBook size={22} /> Aulas
        </DrawerButtons>
        

        <LogoutButton><FiLogOut size={22}/> Sair</LogoutButton>
        <UserInfoContainer>
            <BiUserCircle size={35}/>
            <UserInfo>
                <UserName>Carlos Braga</UserName>
                <UserId>BI3040031</UserId>
            </UserInfo>
        </UserInfoContainer>
      </LeftDrawer>
      {pages[selectedTab-1]}
    </HomeLoggedContainer>
  );
}
