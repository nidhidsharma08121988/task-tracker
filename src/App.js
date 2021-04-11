import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learn React',
      day: 'Feb 5th at 2:30pm',
      reminder: false
    }, {
      id: 2,
      text: 'Learn Redux',
      day: 'Feb 6th at 2:30pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Learn GraphQL',
      day: 'Feb 7th at 2:30pm',
      reminder: true
    },
    {
      id: 4,
      text: 'Learn React Testing',
      day: 'Feb 8th at 2:30pm',
      reminder: true
    },
    {
      id: 5,
      text: 'Understand Package.json',
      day: 'Feb 9th at 2:30pm',
      reminder: false
    }]);

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const [showAddTask, setShowAddTask] = useState(false);
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task;
    }))
  }

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to show"}
    </div>
  );
}

export default App;
