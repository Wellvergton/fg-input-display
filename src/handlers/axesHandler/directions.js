import { moves } from "../../stores/moves.js";
import Arrow from "../../objects/Arrow.js";

let movesCopy;

moves.subscribe((value) => (movesCopy = value));

function insertArrow(direction, rotate) {
  const arrow = new Arrow(direction, rotate);

  moves.addMove(arrow);
}

const directions = {
  up: function () {
    insertArrow("up", false);
  },
  rightup: function () {
    insertArrow("up", true);
  },
  right: function () {
    insertArrow("right", false);
  },
  downright: function () {
    insertArrow("right", true);
  },
  down: function () {
    insertArrow("down", false);
  },
  downleft: function () {
    insertArrow("down", true);
  },
  left: function () {
    insertArrow("left", false);
  },
  leftup: function () {
    insertArrow("left", true);
  },
};

export default directions;
