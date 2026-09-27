import { useDroppable } from "@dnd-kit/core";
import { ColumnStyled } from "../../pages/home/styles"
import { ColumnIndicator } from "../column-indicator/column-indicator";

interface ColumnBoard {
    backgroundColor: string;
    id: string;
    children: React.ReactNode;
    columnTitle: string;
    counter: number;
    bgColumnIndicator: string;
}


export const ColumnBoard = ({ backgroundColor, children, id, columnTitle, counter, bgColumnIndicator }: ColumnBoard) => {
    const { setNodeRef } = useDroppable({ id })

    return (
        <ColumnStyled
            ref={setNodeRef}
            bg={backgroundColor}>
            <ColumnIndicator
                columnTitle={columnTitle}
                counter={counter}
                backgroundColor={bgColumnIndicator}
            />
            {children}
        </ColumnStyled>
    )
}