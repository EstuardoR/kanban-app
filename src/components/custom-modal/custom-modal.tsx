import { useState, type JSX } from "react";
import { ModalContainerStyled, OverlayStyled } from "./styles";
import { type Status, type Task } from "../../interfaces/task.interface";
import { v4 as uuidv4 } from "uuid";






interface CustomModalProps {
    setOpen: (open: boolean) => void;
    onSubmit: (task: Task) => void;


}


export const CustomModal = ({ setOpen, onSubmit }: CustomModalProps): JSX.Element => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<Status>("backlog");
    const [createdAt, setCreatedAt] = useState<string>("");

    const handleSubmit = () => {
        const id = uuidv4();
        onSubmit({ id, title, description, status, createdAt });
    }

    return (
        <OverlayStyled onClick={() => setOpen(false)}>
            <ModalContainerStyled onClick={(e) => e.stopPropagation()}>
                <button style={{ position: 'absolute', left: 1, top: 1 }} onClick={() => setOpen(false)}> X</button>
                <input
                    placeholder="Titulo de la tarea"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={() => setStatus("in-process")}>En Proceso</button>
                <button onClick={() => setStatus("backlog")}>Backlog</button>
                <button onClick={() => setStatus("completed")}>Completado</button>
                <input
                    placeholder="Fecha"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                />

                <button onClick={handleSubmit}>AÑADIR</button>
            </ModalContainerStyled>
        </OverlayStyled>
    )
}


