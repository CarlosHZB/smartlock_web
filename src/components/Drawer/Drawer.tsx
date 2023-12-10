import React from 'react';
import { AiOutlineAlert } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineBook } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { RiDoorLockLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { useUser } from '../../data/contexts';
import { DrawerButtons, DrawerTitle, LeftDrawer, LogoutButton, UserInfo, UserInfoContainer } from '../../styles/HomeLogged';

interface DrawerProps {
    selectedTab: number;
    handleButtonClick: (buttonIndex: number) => void;
}

const Drawer: React.FC<DrawerProps> = ({ selectedTab, handleButtonClick }) => {

    const { user, logout } = useUser()

    return (
        <LeftDrawer>
            <DrawerTitle>Smartlock Dashboard</DrawerTitle>
            <DrawerButtons onClick={() => handleButtonClick(1)} className={selectedTab === 1 ? "active" : ""}>
                <SiGoogleclassroom size={22} /> Salas
            </DrawerButtons>
            <DrawerButtons onClick={() => handleButtonClick(2)} className={selectedTab === 2 ? "active" : ""}>
                <FaChalkboardTeacher size={22} /> Professores
            </DrawerButtons>
            <DrawerButtons onClick={() => handleButtonClick(3)} className={selectedTab === 3 ? "active" : ""}>
                <MdOutlineBook size={22} /> Aulas
            </DrawerButtons>
            <DrawerButtons onClick={() => handleButtonClick(4)} className={selectedTab === 4 ? "active" : ""}>
                <RiDoorLockLine size={22} /> Fechaduras
            </DrawerButtons>
            <DrawerButtons onClick={() => handleButtonClick(5)} className={selectedTab === 5 ? "active" : ""}>
                <AiOutlineAlert size={22} /> Alertas
            </DrawerButtons>
            <DrawerButtons onClick={() => {}} className={selectedTab === 6 ? "active" : ""} style={{opacity: '15%'}} >
                <PiStudentBold size={22} /> Alunos
            </DrawerButtons>
            <LogoutButton onClick={logout} >
                <FiLogOut size={22} /> Sair
            </LogoutButton>
            <UserInfoContainer>
                <BiUserCircle size={35} />
                <UserInfo>
                    <p className='name-drawer'>{user?.name}</p>
                    <p className='code-drawer'>{user?.code}</p>
                </UserInfo>
                <p>v.2.2.4</p>
            </UserInfoContainer>
        </LeftDrawer>
    );
};

export default Drawer;
