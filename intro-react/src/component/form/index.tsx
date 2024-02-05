import React, { SetStateAction } from "react";
import Button from "../button";
import style from './form.module.scss';
import { ITasks } from "../tasks/tasks";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{ setTasks: React.Dispatch<SetStateAction<ITasks[]>> }> {
  state = { nome: "", tempo: "00:00" }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks(oldTasks => [...oldTasks, {
      ...this.state,
      select: false,
      complete: false,
      id: uuidv4()
    }])
    this.setState({ nome: "", tempo: "00:00" })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input type="text" name="tarefa" id="tarefa"
            placeholder="O que você quer estudar" required
            value={this.state.nome}
            onChange={event => this.setState({ ...this.state, nome: event.target.value })} />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input type="time" step="1" name="tempo" id="tempo"
            min="00:00:00" max="01:30:00" required
            value={this.state.tempo}
            onChange={event => this.setState({ ...this.state, tempo: event.target.value })} />
        </div>
        <Button type="submit">
          Adicionar
        </Button>
      </form>
    )
  }
}

export default Form;