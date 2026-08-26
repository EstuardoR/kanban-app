import { useState, type JSX } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box
} from "@mui/material";
import { type Status, type Task } from "../../interfaces/task.interface";
import { v4 as uuidv4 } from "uuid";

interface CustomModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    onSubmit: (task: Task) => void;
}

export const CustomModal = ({ open, setOpen, onSubmit }: CustomModalProps): JSX.Element => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<Status>("backlog");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        const id = uuidv4();
        const createdAt = new Date().toISOString().split("T")[0];

        onSubmit({ id, title, description, status, createdAt });


        setTitle("");
        setDescription("");
        setStatus("backlog");
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="sm"
            fullWidth
            onSubmit={handleSubmit}
            component={'form'}
            sx={{ borderRadius: 12, padding: '8px' }}
        >
            <DialogTitle sx={{ fontWeight: 600 }}>Crear Nueva Tarea</DialogTitle>

            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 1 }}>
                    <TextField
                        label="Título de la tarea"
                        placeholder="Ej. Diseñar interfaz de usuario"
                        variant="outlined"
                        fullWidth
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />

                    <TextField
                        label="Descripción"
                        placeholder="Añade detalles sobre la tarea..."
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="status-label">Estado inicial</InputLabel>
                        <Select
                            labelId="status-label"
                            value={status}
                            label="Estado inicial"
                            onChange={(e) => setStatus(e.target.value as Status)}
                        >
                            <MenuItem value="backlog">Backlog</MenuItem>
                            <MenuItem value="in-process">En Proceso</MenuItem>
                            <MenuItem value="completed">Completado</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button
                    onClick={() => setOpen(false)}
                    color="inherit"
                    sx={{ textTransform: 'none' }}
                >
                    Cancelar
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    disabled={!title.trim()}
                    sx={{ textTransform: 'none', px: 3 }}
                >
                    Añadir Tarea
                </Button>
            </DialogActions>
        </Dialog>
    );
};