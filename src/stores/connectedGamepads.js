import { writable } from "svelte/store";

function createGamepads() {
  const { subscribe, update } = writable({});
  let gamepadsCopy;

  return {
    subscribe,
    addGamepad: function (index, newGamepad) {
      update((gamepads) => {
        gamepadsCopy = Object.create(gamepads);
        gamepadsCopy[index] = newGamepad;

        return gamepadsCopy;
      });
    },
    removeGamepad: function (index) {
      update((gamepads) => {
        gamepadsCopy = Object.create(gamepads);

        delete gamepadsCopy[index];

        return gamepadsCopy;
      });
    },
  };
}

export const connectedGamepads = createGamepads();
