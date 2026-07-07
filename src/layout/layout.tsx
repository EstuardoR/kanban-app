
interface KanbanAppLayoutProps {
    children: React.ReactNode
}


export const KanbanAppLayout = ({ children }: KanbanAppLayoutProps) => {
    return (
        <div>
            <header>
                <h6>Welcome to my kanban app</h6>
            </header>
                {children}  
        </div>
    )
}