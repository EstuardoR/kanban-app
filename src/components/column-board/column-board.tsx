import { useDroppable } from "@dnd-kit/core";
import { ColumnStyled } from "../../pages/home/styles"

interface ColumnBoard {
    backgroundColor: string;
    id: string;
    children: React.ReactNode;
}


export const ColumnBoard = ({ backgroundColor, children, id }: ColumnBoard) => {
    const { setNodeRef } = useDroppable({ id })

    return (
        <ColumnStyled
            ref={setNodeRef}
            bg={backgroundColor}>

            {children}
        </ColumnStyled>
    )
}