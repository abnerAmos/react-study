import { useState } from 'react';
import Form from '../component/form';
import List from '../component/List';
import Timer from '../Timer';
import style from './app.module.scss';
import { ITasks } from '../component/tasks/tasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [select, setSelect] = useState<ITasks>();

  function selectTask(selectedTask: ITasks) {
    setSelect(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      select: task.id === selectedTask.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer select={select} />
    </div>
  );
}

export default App;
