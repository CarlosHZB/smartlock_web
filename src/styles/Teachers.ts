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

export const TableRowContent = styled.h1`
    color: #263238;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 700;
`

export const TrashButton = styled.button`
    border: none;
    color: #F24E1E;
`