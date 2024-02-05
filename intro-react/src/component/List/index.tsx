import { useState } from 'react';
import Item from './Item';
import style from './list.module.scss';
import { ITasks } from '../tasks/tasks';

interface Props {
  tasks: ITasks[],
  selectTask: (selectedTask: ITasks) => void
}

function List({ tasks, selectTask }: Props) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map(item => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;