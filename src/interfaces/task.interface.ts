
export type Task = {
    id: string,
    title: string,
    description: string,
    status: Status,
    createdAt: string,
}

export type Status = "backlog" | "completed" | "in-process"
