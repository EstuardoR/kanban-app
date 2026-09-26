import { useState } from "react";
import { ColumnsContainerStyled, MainWrapperStyled } from "./styles";
import { CustomModal } from "../../components/custom-modal/custom-modal";
import { type Status, type Task } from "../../interfaces/task.interface";
import { TaskCard } from "../../components/task-card/task-card";
import { DndContext, type DragEndEvent, type DragOverEvent, type DragStartEvent, DragOverlay } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { ColumnBoard } from "../../components/column-board/column-board";





export default function Home() {
    const [open, setOpen] = useState<boolean>(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [activeTask, setActiveTask] = useState<Task | null>(null);

    const handleOpenModal = (): void => {
        setOpen(true);
    }

    const handleAddTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task])
    }

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        const task = tasks.find(t => t.id === active.id);
        setActiveTask(task || null);
    }

    const handleDragEnd = (_onDragEndEvent: DragEndEvent) => {
        setActiveTask(null);
    }

    const columnIds: Status[] = ["backlog", "in-process", "completed"];

    const handleDragOver = (onDragOverEvent: DragOverEvent) => {
        const { active, over } = onDragOverEvent;

        if (!over) return;

        const activeTaskItem = tasks.find(t => t.id === active.id);

        if (!activeTaskItem) return;

        const overTaskItem = tasks.find(t => t.id === over.id);
        const overColumnId = columnIds.find(id => id === over.id);

        const newStatus = overTaskItem ? overTaskItem.status : overColumnId;

        if (!newStatus) return;

        const activeStatus = activeTaskItem.status;

        if (activeStatus !== newStatus) {
            setTasks(prevTasks => prevTasks.map(task =>
                task.id === active.id
                    ? { ...task, status: newStatus }
                    : task
            ))
        }
    }


    const backlogTasks = tasks.filter(t => t.status === "backlog");
    const processTasks = tasks.filter(t => t.status === "in-process");
    const completedTasks = tasks.filter(t => t.status === "completed");


    return (
        <MainWrapperStyled>
            <h1>Kanban app</h1>
            <button onClick={handleOpenModal}>AÑADIR TAREA</button>
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
                <ColumnsContainerStyled>
                    <SortableContext items={completedTasks} strategy={verticalListSortingStrategy}>
                        <ColumnBoard backgroundColor="#c0c9cead" id="completed">
                            {completedTasks.map(item => (
                                <TaskCard key={item.id} task={item} />
                            ))}
                        </ColumnBoard>
                    </SortableContext>

                    <SortableContext items={processTasks} strategy={verticalListSortingStrategy}>
                        <ColumnBoard backgroundColor="#c0c9cead " id="in-process">
                            {processTasks.map(item => (
                                <TaskCard key={item.id} task={item} />
                            ))}
                        </ColumnBoard>
                    </SortableContext>

                    <SortableContext items={backlogTasks} strategy={verticalListSortingStrategy}>
                        <ColumnBoard backgroundColor="#c0c9cead" id="backlog">
                            {backlogTasks.map(item => (
                                <TaskCard key={item.id} task={item} />
                            ))}
                        </ColumnBoard>
                    </SortableContext>

                </ColumnsContainerStyled>

                <DragOverlay>
                    {activeTask ? <TaskCard task={activeTask} /> : null}
                </DragOverlay>

            </DndContext>

            {open && (
                <CustomModal
                    onSubmit={handleAddTask}
                    setOpen={setOpen}
                    open={open}
                />
            )}
        </MainWrapperStyled>
    )
}