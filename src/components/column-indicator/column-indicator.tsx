import { Add } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material"
import { ColumnIndicatorWrapperStyled, ColumnTitleStyled, CounterIndicatorStyled, IconButtonStyled, InfoWrapperStyled } from "./styles";

interface ColumnIndicatorProps {
    columnTitle: string;
    backgroundColor: string;
    counter?: number;
    handleClick?: () => void;


}


export const ColumnIndicator = ({ columnTitle, backgroundColor, counter, handleClick }: ColumnIndicatorProps) => {
    return (
        <ColumnIndicatorWrapperStyled $backgroundColor={backgroundColor}>
            <InfoWrapperStyled>
                <CounterIndicatorStyled
                    $backgroundColor={backgroundColor}
                >
                    {counter}
                </CounterIndicatorStyled>
                <ColumnTitleStyled>
                    {columnTitle}
                </ColumnTitleStyled>
            </InfoWrapperStyled>


            <IconButtonStyled
                onClick={handleClick}
            >
                <Add />
            </IconButtonStyled>

        </ColumnIndicatorWrapperStyled>
    )
}