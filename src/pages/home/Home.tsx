import { useState } from "react";
import { BoardHeaderStyled, BoardSectionStyled, ColumnsContainerStyled, MainWrapperStyled, SidebarStyled } from "./styles";
import { CustomModal } from "../../components/custom-modal/custom-modal";
import { type Status, type Task } from "../../interfaces/task.interface";
import { TaskCard } from "../../components/task-card/task-card";
import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ColumnBoard } from "../../components/column-board/column-board";
import { COLUMNS } from "../../constants/columns.constant";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<Status>("backlog");

  const handleOpenModal = (status: Status): void => {
    setSelectedStatus(status);
    setOpen(true);
  };

  const handleAddTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (_onDragEndEvent: DragEndEvent) => {
    setActiveTask(null);
  };

  const handleDragOver = (onDragOverEvent: DragOverEvent) => {
    const { active, over } = onDragOverEvent;

    if (!over) return;

    const activeTaskItem = tasks.find((t) => t.id === active.id);

    if (!activeTaskItem) return;

    const overTaskItem = tasks.find((t) => t.id === over.id);
    const overColumnId = COLUMNS.find((c) => c.id === over.id)?.id;

    const newStatus = overTaskItem ? overTaskItem.status : overColumnId;

    if (!newStatus) return;

    const activeStatus = activeTaskItem.status;

    if (activeStatus !== newStatus) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === active.id ? { ...task, status: newStatus } : task,
        ),
      );
    }
  };

  return (
    <MainWrapperStyled>
      <SidebarStyled>Sidebar</SidebarStyled>

      <BoardSectionStyled>
        <BoardHeaderStyled variant="h4" component="h1">
          Kanban App
        </BoardHeaderStyled>

        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
        >
          <ColumnsContainerStyled>
            {COLUMNS.map((column) => {
              const columnTasks = tasks.filter((t) => t.status === column.id);
              return (
                <SortableContext
                  key={column.id}
                  items={columnTasks}
                  strategy={verticalListSortingStrategy}
                >
                  <ColumnBoard
                    id={column.id}
                    columnTitle={column.columnTitle}
                    bgColumnIndicator={column.bgColumnIndicator}
                    counter={columnTasks.length}
                    handleClick={() => handleOpenModal(column.id)}
                  >
                    {columnTasks.map((item) => (
                      <TaskCard key={item.id} task={item} />
                    ))}
                  </ColumnBoard>
                </SortableContext>
              );
            })}
          </ColumnsContainerStyled>

          <DragOverlay>
            {activeTask ? <TaskCard task={activeTask} /> : null}
          </DragOverlay>
        </DndContext>
      </BoardSectionStyled>

      {open && (
        <CustomModal
          onSubmit={handleAddTask}
          setOpen={setOpen}
          open={open}
          status={selectedStatus}
        />
      )}
    </MainWrapperStyled>
  );
}
