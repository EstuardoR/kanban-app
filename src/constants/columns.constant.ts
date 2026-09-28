import type { Status } from "../interfaces/task.interface";

export type ColumnConfig = {
  id: Status;
  columnTitle: string;
  bgColumnIndicator: string;
};

export const COLUMNS: ColumnConfig[] = [
  {
    id: "completed",
    columnTitle: "Completado",
    bgColumnIndicator: "#22C55E",
  },
  {
    id: "in-process",
    columnTitle: "En proceso",
    bgColumnIndicator: "#F59E0B",
  },
  {
    id: "backlog",
    columnTitle: "Backlog",
    bgColumnIndicator: "#4F46E5",
  },
];
