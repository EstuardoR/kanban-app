import { Box, Typography } from "@mui/material"
import type { JSX } from "react"
import { type Task } from "../../interfaces/task.interface";

interface TaskCardProps {
    task: Task;

}

export const TaskCard = ({ task }: TaskCardProps): JSX.Element => {

    return (
        <Box>
            <Typography>
                {task?.createdAt}
            </Typography>
            <Typography>
                {task?.title}
            </Typography>
            <Typography>
                {task?.description}
            </Typography>
        </Box>
    )

}