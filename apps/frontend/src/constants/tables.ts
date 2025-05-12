type Table = {
  id: number;
  name: string;
  status: string;
  initial: string;
  seats: number;
};

export const tables: Table[] = [
  { id: 1, name: "Mesa 1", status: "Reservada", initial: "AM", seats: 4 },
  { id: 2, name: "Mesa 2", status: "Disponible", initial: "MB", seats: 6 },
  { id: 3, name: "Mesa 3", status: "Reservada", initial: "JS", seats: 2 },
  { id: 4, name: "Mesa 4", status: "Disponible", initial: "HR", seats: 4 },
  { id: 5, name: "Mesa 5", status: "Reservada", initial: "PL", seats: 3 },
  { id: 6, name: "Mesa 6", status: "Disponible", initial: "RT", seats: 4 },
  { id: 7, name: "Mesa 7", status: "Reservada", initial: "LC", seats: 5 },
  { id: 8, name: "Mesa 8", status: "Disponible", initial: "DP", seats: 5 },
  { id: 9, name: "Mesa 9", status: "Reservada", initial: "NK", seats: 6 },
  { id: 10, name: "Mesa 10", status: "Disponible", initial: "SB", seats: 6 },
  { id: 11, name: "Mesa 11", status: "Reservada", initial: "GT", seats: 4 },
  { id: 12, name: "Mesa 12", status: "Disponible", initial: "JS", seats: 6 },
  { id: 13, name: "Mesa 13", status: "Reservada", initial: "EK", seats: 2 },
  { id: 14, name: "Mesa 14", status: "Disponible", initial: "QN", seats: 6 },
  { id: 15, name: "Mesa 15", status: "Reservada", initial: "TW", seats: 3 },
];
