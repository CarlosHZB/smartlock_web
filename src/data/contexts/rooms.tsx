// import { api } from "../services/api_provider";

// export interface Sala {
//   id: string;
//   block: string;
//   name: string;
//   access: any[];
// }


// export const getRoomsByBlock = async (block: any) => {
//   try {
//     const response = await fetch(`${api}/classroom/block/${block}`);
//     if (!response.ok) {
//       throw new Error(`Erro ao buscar salas do bloco ${block}`);
//     }
//     return response.json();
//   } catch (error) {
//     console.error(`Erro ao buscar salas do bloco ${block}:`, error);
//     throw error;
//   }
// };