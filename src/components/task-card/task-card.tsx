import type { JSX } from "react";
import { type Task } from "../../interfaces/task.interface";
import {
  CardTaskContainerStyled,
  CardTaskDescriptionStyled,
  CardTaskTitleStyled,
} from "./styles";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  return (
    <CardTaskContainerStyled>
      <CardTaskTitleStyled>{task?.title}</CardTaskTitleStyled>
      <CardTaskDescriptionStyled>{task?.description}</CardTaskDescriptionStyled>
    </CardTaskContainerStyled>
  );
};
