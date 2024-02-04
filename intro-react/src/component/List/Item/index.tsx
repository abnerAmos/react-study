import { ITasks } from '../../tasks/tasks'
import style from '../list.module.scss'

export default function Item({ nome, tempo, select, complete, id }: ITasks) {
  return (
    <li className={style.item}>
      <h3> {nome} </h3>
      <span> {tempo} </span>
    </li>
  )
}