import { config } from "./config.js";
import { writable } from "svelte/store";

function createGamepads() {
  const { subscribe, update } = writable({});
  let gamepadsCopy;
  let cfg;

  config.subscribe((value) => (cfg = Object.assign({}, value)));

  return {
    subscribe,
    addGamepad: function (index, newGamepad) {
      update((gamepads) => {
        gamepadsCopy = Object.assign({}, gamepads);
        gamepadsCopy[index] = newGamepad;

        return gamepadsCopy;
      });
    },
    removeGamepad: function (index) {
      update((gamepads) => {
        gamepadsCopy = Object.assign({}, gamepads);

        delete gamepadsCopy[index];

        if (Object.keys(gamepadsCopy).length > 0) {
          config.setSelectedGamepad(Object.keys(gamepadsCopy)[0]);
        } else {
          config.setSelectedGamepad(0);
        }

        return gamepadsCopy;
      });
    },
  };
}

export const connectedGamepads = createGamepads();
