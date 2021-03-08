import { moves } from "../stores/moves.js";
import { config } from "../stores/config.js";
import { mapping } from "../stores/mapping";
import Buttons from "../objects/Buttons.js";

let maxIndex;
let pressedButtons = [];
let previousButtons = [];
let elapsedFrames = 0;
let multiInputFrameLimit = 0;
let currentMapping;

config.subscribe((value) => {
  maxIndex = value.maxButtonIndex;
  multiInputFrameLimit = value.multiInputFrameLimit;
});

mapping.subscribe((value) => {
  if (value !== undefined && Object.keys(value).length > 0) {
    currentMapping = value;
  }
});

function buttonsHandler(buttons) {
  const someButtonIsPressed = buttons.some((button) => button.pressed);

  elapsedFrames++;

  if (someButtonIsPressed) {
    buttons.forEach((button, index) => {
      if (button.pressed && !pressedButtons.includes(index)) {
        pressedButtons.push(index);
      }
    });
  }

  if (elapsedFrames > multiInputFrameLimit) {
    let notHeldButtons = pressedButtons.filter((button) => {
      if (currentMapping) {
        return !previousButtons.includes(button) && button in currentMapping;
      } else {
        return !previousButtons.includes(button) && button < maxIndex;
      }
    });

    if (currentMapping !== undefined) {
      notHeldButtons = notHeldButtons.map((value) => currentMapping[value]);
    }

    if (notHeldButtons.length > 0) {
      moves.addMove(new Buttons(notHeldButtons));
    }

    previousButtons = Array.from(pressedButtons);
    pressedButtons = [];
    elapsedFrames = 0;
  }
}

export default buttonsHandler;
