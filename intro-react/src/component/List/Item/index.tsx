import { ITasks } from '../../tasks/tasks'
import style from './item.module.scss'

interface Props extends ITasks {
  selectTask: (selectedTask: ITasks) => void
}

export default function Item({ nome, tempo, select, complete, id, selectTask }: Props) {
  return (
    <li className={`${style.item} ${select ? style.itemSelecionado : ''}`}
      onClick={() => selectTask({ nome, tempo, select, complete, id })}>
      <h3> {nome} </h3>
      <span> {tempo} </span>
    </li>
  )
}