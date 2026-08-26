import { useState } from "react";
import { ColumnsContainerStyled, ColumnStyled, MainWrapperStyled } from "./styles";
import { CustomModal } from "../../components/custom-modal/custom-modal";
import { type Task } from "../../interfaces/task.interface";
import { TaskCard } from "../../components/task-card/task-card";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";


const initialTasks: Task[] = [
    {
        id: "1",
        title: "Tarea 1",
        description: "Tarea 1",
        status: "in-process",
        createdAt: new Date().toString(),
    },
    {
        id: "2",
        title: "Tarea 2",
        description: "Tarea 2",
        status: "completed",
        createdAt: new Date().toString(),
    },
    {
        id: "3",
        title: "Tarea 3",
        description: "Tarea 3",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "4",
        title: "Tarea 4",
        description: "Tarea 4",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "5",
        title: "Tarea 5",
        description: "Tarea 5",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "6",
        title: "Tarea 6",
        description: "Tarea 6",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "7",
        title: "Tarea 7",
        description: "Tarea 7",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "8",
        title: "Tarea 8",
        description: "Tarea 8",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "9",
        title: "Tarea 9",
        description: "Tarea 9",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "10",
        title: "Tarea 10",
        description: "Tarea 10",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "11",
        title: "Tarea 11",
        description: "Tarea 11",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "12",
        title: "Tarea 12",
        description: "Tarea 12",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "13",
        title: "Tarea 13",
        description: "Tarea 13",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "14",
        title: "Tarea 14",
        description: "Tarea 14",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "15",
        title: "Tarea 15",
        description: "Tarea 15",
        status: "backlog",
        createdAt: new Date().toString(),
    },
    {
        id: "16",
        title: "Tarea 16",
        description: "Tarea 16",
        status: "backlog",
        createdAt: new Date().toString(),
    },

]


export default function Home() {
    const [open, setOpen] = useState<boolean>(false);
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const handleOpenModal = (): void => {
        setOpen(true);
    }

    const handleAddTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task])
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;

        //Logica para cambiar de estado las tasks

    }


    const backlogTasks = tasks.filter(t => t.status === "backlog");
    const processTasks = tasks.filter(t => t.status === "in-process");
    const completedTasks = tasks.filter(t => t.status === "completed");


    return (
        <MainWrapperStyled>
            <h1>Kanban app</h1>
            <button onClick={handleOpenModal}>AÑADIR TAREA</button>
            <DndContext onDragEnd={handleDragEnd}>
                <ColumnsContainerStyled>
                    <SortableContext items={completedTasks} strategy={verticalListSortingStrategy}>
                        <ColumnStyled bg=" #c0c9ce19 ">
                            {completedTasks.map(item => (
                                <TaskCard key={item.id} task={item} />
                            ))}
                        </ColumnStyled>
                    </SortableContext>

                    <SortableContext items={processTasks} strategy={verticalListSortingStrategy}>
                        <ColumnStyled bg=" #c0c9cead ">
                            {processTasks.map(item => (
                                <TaskCard key={item.id} task={item} />
                            ))}
                        </ColumnStyled>
                    </SortableContext>

                    <SortableContext items={processTasks} strategy={verticalListSortingStrategy}>
                        <ColumnStyled bg=" #c0c9cead ">
                            {backlogTasks.map(item => (
                                <TaskCard key={item.id} task={item} />
                            ))}
                        </ColumnStyled>
                    </SortableContext>

                </ColumnsContainerStyled>

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