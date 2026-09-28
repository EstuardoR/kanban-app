import { useDroppable } from "@dnd-kit/core";
import { ColumnStyled } from "../../pages/home/styles";
import { ColumnIndicator } from "../column-indicator/column-indicator";

interface ColumnBoard {
  id: string;
  children: React.ReactNode;
  columnTitle: string;
  counter: number;
  bgColumnIndicator: string;
  handleClick?: () => void;
}

export const ColumnBoard = ({
  children,
  id,
  columnTitle,
  counter,
  bgColumnIndicator,
  handleClick,
}: ColumnBoard) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <ColumnStyled ref={setNodeRef}>
      <ColumnIndicator
        handleClick={handleClick}
        columnTitle={columnTitle}
        counter={counter}
        backgroundColor={bgColumnIndicator}
      />
      {children}
    </ColumnStyled>
  );
};
