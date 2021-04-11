import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    const dispTasks = <div>{tasks.map((task) => {
        return <Task onToggle={onToggle} key={task.id} task={task} onDelete={onDelete} />
    })}</div >;
    return dispTasks;
}

export default Tasks
