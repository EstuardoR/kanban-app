import styled from 'styled-components';

interface ColumnStyledProps {
    bg: string
}

export const MainWrapperStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: white;
  color: black;
`;


export const ColumnsContainerStyled = styled.div`
  display: flex;
  flex: 1;

  gap: 30px;
  width: 100%;

  min-height: 0;
`;


export const ColumnStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bg",
})<ColumnStyledProps>`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 10px;
  gap: 10px;

  overflow-y: auto;
  min-height: 0;

  justify-content: flex-start;
  align-items: center;

  background: ${(props) => props.bg};
`;