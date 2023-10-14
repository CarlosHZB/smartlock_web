import styled from "styled-components";

export const TeacherContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 78%;
    background-color: #D2D9DE;
`

export const TeacherHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 7px;
`

export const TeacherTitle = styled.h1`
    color: #263238;
    font-family: 'Montserrat';
    font-size: 25px;
    font-weight: 700;
    margin-left: 3rem;
`

export const AddTeacher = styled.button`
    display: flex;
    background-color: #263238;
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 100;
    margin-right: 3rem;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 7px;
    padding: 10px;
    padding-right: 25px;
    padding-left: 25px;
    align-items: center;
    gap: 0.5rem;
`

export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
    background-color: #26323840;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    width: 90%;
    margin-left: 3rem;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`

export const TableTitleRows = styled.h1`
    color: #26323866;
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 700;
`

export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 3rem;
    align-items: center;
    justify-content: space-around;
    background-color: #F2F8FD;
    height: 60px;
    width: 90%;
    border-bottom: 2px solid #ccc;
`

export const TableRowContentName = styled.a`
    color: #263238;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;

    &:hover{
        color: #E4897B;
    }
`
export const TableRowContent = styled.h1`
    color: #263238;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 700;
`

export const ClassContent = styled.div`
    padding: 4px 10px;
    background-color: #2A5679;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: white;
    font-size: 11px;
`

export const TrashButton = styled.button`
    border: none;
    color: #F24E1E;
`

export const Overlay = styled.div`
    position: fixed;
    top: 90px;
    right: 50px;
    width: 38%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.8); */
    background-color: #D2D9DE;
    /* z-index: 999; */
    color: white;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const OverlayMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 85px;
    margin-left: 30px;
    width: 90%;
    height: 50%;
    background-color: #F2F8FD;
    border-radius: 10px;
`

export const FirstRowOverlay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 20px;
    width: 95%;
`

export const DisposeButton = styled.button`
    border: none;
    background-color: transparent;
    margin-left: 8px;
    margin-top: 8px;
    cursor: pointer;
`
export const EditButton = styled.button`
    border: none;
    background-color: transparent;
    margin-left: 8px;
    margin-top: 8px;
    cursor: pointer;
`

export const OverlayTitle = styled.h1`
    color: #263238;
    margin-left: 1.5em;
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 700;
`

export const ClassesEdit = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0px 18px;
    margin-bottom: 20px;
    padding: 0px 12px;
    background-color: #F2F8FD;
    border: 1px solid #2A567999;
    color: #263238;
    border-radius: 5px;
    height: 35px;
    width: 90%;
`
export const ClassesDivTitle = styled.h1`
    color: #263238;
    padding-left: 2.5em;
    font-family: 'Montserrat';
    font-size: 10px;
    font-weight: 300;
`

export const WrapButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 95%;
`

export const SaveButton = styled.button`
    display: flex;
    background-color: #2A5679;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 500;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 7px;
    padding: 5px;
    padding-right: 25px;
    padding-left: 25px;
    align-items: center;
    gap: 0.5rem;
`

export const WrapDetailsButton = styled.div`
    display: flex;
    flex-direction: row;
`

export const InformationColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

export const EmailTitle = styled.h1`
    margin-top: 0;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 100;
    color: #2A567966;
`

export const EmailStyle = styled.h1`
    margin-top: 0;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 500;
    color: #2A5679;
`

export const ClassesLogo = styled.div`
    display: flex;
    width: 30px;
    background-color: #2A5679;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 7px;
    padding: 5px;
    padding-right: 25px;
    margin-right: 10px;
    padding-left: 25px;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`
export const WrapClassesLogo = styled.div`
    display: flex;
    flex-direction: row;
`

export const NextCLassesTitle = styled.h1`
    padding-top: 2px;
    margin-left: 20px;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 500;
    color: #263238;
`

export const ClassesDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 25px;
    margin-bottom: 7px;
    background-color: #F2F8FD;
    border: 1px solid #2A567999;
    border-radius: 5px;
    height: 35px;
    width: 90%;
`

export const ClassTitle = styled.h1`
    margin-left: 12px;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 500;
    color: #2A5679;
`

export const DateTimeColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 12px;
`

export const DateStyle = styled.h1`
    margin-bottom: 0;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 100;
    color: #2A567999;
`

export const TimeStyle = styled.h1`
    margin-top: 0;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 700;
    color: #2A567999;
` 