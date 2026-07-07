import styled from 'styled-components';

interface ColumnStyledProps {
    bg: string
}


export const MainWrapperStyled = styled.div`
 width: 100vw;
 height: 100vh;
 background-color: white;
 color: black;
 position: absolute;
`;


export const ColumnsContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 70%;
`;

export const ColumnStyled = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "bg",
}) <ColumnStyledProps>`
    width: 25%;
    height: 100%;
   background-color: ${(props) => props.bg};
`