
import styled from 'styled-components';

export const TableContainer = styled.table<{ isExpanded: boolean }>`
    border-collapse: collapse;
    width: ${({ isExpanded }) => (isExpanded ? '100%' : '50%')};
    margin-top: 1rem;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    border-radius: 30px;
    border-style: hidden; /* hide standard table (collapsed) border */

    tr:last-child td:first-child {
        border-bottom-left-radius: 10px;
        border: none;
    }
        
    tr:last-child td:last-child {
        border-bottom-right-radius: 10px;
        border: none;
    }
`;

export const TableBody = styled.tbody`
    border-radius: 6px; /* Adiciona uma borda arredondada */
`;

export const TableRow = styled.tr`
    background-color: #f2f8fd; /* Define a cor de fundo */  
`;

export const TableHead = styled.thead`
    th:first-child {
        border-top-left-radius: 10px;
        border: none;
    }

    th:last-child {
        border-top-right-radius: 10px;
        border: none;
    }
`;

export const TableHeader = styled.th`
  padding: 1rem 12px;
    font-size: 15px;
    font-weight: 6  00;
  text-align: left;
  background-color: #26323847;
  color: #263238C3;
`;

export const TableCell = styled.td`
  padding: 0.8rem 12px;
  border-bottom: 1px solid #ccc; /* Adiciona uma borda à célula */
  gap: 0.5rem;

`;

export const TableCellName = styled.td`
  padding: 0.8rem 12px;
  border-bottom: 1px solid #ccc; /* Adiciona uma borda à célula */

  &:hover {
    color: #EF835F;
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff5733;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer;
`;
