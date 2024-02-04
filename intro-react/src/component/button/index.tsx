import React, { PropsWithChildren } from "react";
import style from './button.module.scss';

class Button extends React.Component<{
  children: string;
  type?: "button" | "submit" | "reset" | undefined
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;