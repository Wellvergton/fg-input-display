import { moves } from "../stores/moves.js";
import { mapping } from "../stores/mapping.js";
import { config } from "../stores/config";

const callbacks = [];
let buttonForMapping;
let currentMapping = {};
let gamepad;
let choosenPad;

config.subscribe((value) => (choosenPad = value.choosenPad));

function onButtonMapped(callback) {
  callbacks.push(callback);
}

function notify() {
  callbacks.forEach((callback) => callback());
}

function handleInputs() {
  gamepad = navigator.getGamepads()[choosenPad];

  requestAnimationFrame(handleInputs);

  for (let i = 0; i < gamepad.buttons.length; i++) {
    if (gamepad.buttons[i].pressed) {
      cancelAnimationFrame(handleInputs);
      currentMapping[i] = buttonForMapping;
      notify();
      break;
    }
  }
}

function setButtonForMapping(value) {
  buttonForMapping = value;
  handleInputs();
}

function onFinishMapping() {
  moves.clear();
  mapping.save(Object.assign({}, currentMapping));
}

export default {
  onButtonMapped,
  setButtonForMapping,
  onFinishMapping,
};
