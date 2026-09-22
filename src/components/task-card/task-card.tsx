import type { JSX } from "react";
import { type Task } from "../../interfaces/task.interface";
import {
  CardTaskContainerStyled,
  CardTaskDescriptionStyled,
  CardTaskTitleStyled,
} from "./styles";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  const { id } = task;
  const { listeners, attributes, setNodeRef, transform, transition } = useSortable({ id })


  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return (
    <CardTaskContainerStyled
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <CardTaskTitleStyled>{task?.title}</CardTaskTitleStyled>
      <CardTaskDescriptionStyled>{task?.description}</CardTaskDescriptionStyled>
    </CardTaskContainerStyled>
  );
};
