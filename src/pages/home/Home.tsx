import { useState } from "react";
import { ColumnsContainerStyled, ColumnStyled, MainWrapperStyled } from "./styles";
import { CustomModal } from "../../components/custom-modal/custom-modal";
import { type Task } from "../../interfaces/task.interface";




export default function Home() {
    const [open, setOpen] = useState<boolean>(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleOpenModal = (): void => {
        setOpen(true);
    }

    const handleAddTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task])
    }


    const backlogTasks = tasks.filter(t => t.status === "backlog");
    const processTasks = tasks.filter(t => t.status === "in-process");
    const completedTasks = tasks.filter(t => t.status === "completed");


    return (
        <MainWrapperStyled>
            <h1>Kanban app</h1>
            <button onClick={handleOpenModal}>AÑADIR TAREA</button>
            <ColumnsContainerStyled>
                <ColumnStyled bg="green">
                    {completedTasks.map(item => (
                        <h6>{item.description}</h6>
                    ))}
                </ColumnStyled>
                <ColumnStyled bg="orange">
                    {processTasks.map(item => (
                        <h6>{item.description}</h6>
                    ))}
                </ColumnStyled>
                <ColumnStyled bg="blue">
                    {backlogTasks.map(item => (
                        <h6>{item.description}</h6>
                    ))}
                </ColumnStyled>
            </ColumnsContainerStyled>
            {open && (
                <CustomModal
                    onSubmit={handleAddTask}
                    setOpen={setOpen}
                />
            )}
        </MainWrapperStyled>
    )
}