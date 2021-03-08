import Input from "./Input";

export default function Buttons(pressedButtons) {
  Input.call(this, "button");

  this.pressedButtons = pressedButtons;
}
