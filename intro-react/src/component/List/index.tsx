import { useState } from 'react';
import Item from './Item';
import style from './list.module.scss';
import { ITasks } from '../tasks/tasks';

function List({ tarefas }: { tarefas: ITasks[] }) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;