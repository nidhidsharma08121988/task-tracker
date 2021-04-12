import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    const dispTasks = <div>{tasks.map((task, index) => {
        return <Task onToggle={onToggle} key={index} task={task} onDelete={onDelete} />
    })}</div >;
    return dispTasks;
}

export default Tasks
