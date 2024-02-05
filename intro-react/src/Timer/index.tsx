import { useEffect, useState } from "react";
import Button from "../component/button";
import { ITasks } from "../component/tasks/tasks";
import Clock from "./Clock";
import style from "./timer.module.scss"
import { timeToSeconds } from "../component/common/util/time";

interface Props {
  selected: ITasks | undefined
}

export default function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.tempo) {
      setTime(timeToSeconds(selected.tempo))
    }
  }, [selected]);

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