import Input from "./Input.js";

export default function Arrow(direction, rotate) {
  Input.call(this, "arrow");

  this.direction = direction;
  this.rotate = rotate;
}
