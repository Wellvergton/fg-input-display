import { connectedGamepads } from "./stores/connectedGamepads.js";
import { config } from "./stores/config.js";
import App from "./App.svelte";
import axesHandler from "./handlers/axesHandler";
import buttonsHandler from "./handlers/buttonsHandler.js";

let choosenPad;
let cfg;

config.subscribe((value) => (cfg = value));

const app = new App({
  target: document.body,
});

function showInputs() {
  choosenPad = navigator.getGamepads()[cfg.choosenPad];

  if (choosenPad) {
    buttonsHandler(choosenPad.buttons);
    axesHandler(choosenPad.axes);
  }

  requestAnimationFrame(showInputs);
}

function addGamepad(event) {
  let gamepad = event.gamepad;

  connectedGamepads.addGamepad(gamepad.index, gamepad);
}

function removeGamepad(event) {
  connectedGamepads.removeGamepad(event.gamepad.index);
}

window.addEventListener("gamepadconnected", addGamepad);
window.addEventListener("gamepaddisconnected", removeGamepad);

showInputs();

export default app;
