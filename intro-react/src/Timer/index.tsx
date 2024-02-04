import Button from "../component/button";
import Clock from "./Clock";
import style from "./timer.module.scss"

export default function Timer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}