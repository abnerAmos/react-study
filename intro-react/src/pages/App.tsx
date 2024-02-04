import { useState } from 'react';
import Form from '../component/form';
import List from '../component/List';
import Timer from '../Timer';
import style from './app.module.scss';
import { ITasks } from '../component/tasks/tasks';

function App() {
  const [tarefas, setTarefas] = useState<ITasks[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Timer />
    </div>
  );
}

export default App;
