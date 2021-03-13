import { moves } from "./moves.js";
import { writable } from "svelte/store";

const defaultConfig = {
  buttonsLayout: "sixButtons",
  maxButtonIndex: 6,
  choosenPad: 0,
  multiInputFrameLimit: 3,
  orientation: "horizontal",
};

function saveInLocalStorage(config) {
  localStorage.setItem("config", JSON.stringify(config));
}

function createConfig() {
  let localConfig = JSON.parse(localStorage.getItem("config"));
  let currentConfig = localConfig || defaultConfig;
  currentConfig.choosenPad = 0;

  const { subscribe, update } = writable(Object.assign({}, currentConfig));
  let cfgCopy;

  return {
    subscribe,
    setLayout: function (layout, numberOfButtons) {
      update((cfg) => {
        console.log(cfg);
        cfgCopy = Object.assign({}, cfg);
        cfgCopy.buttonsLayout = layout;
        cfgCopy.maxButtonIndex = numberOfButtons;

        moves.clear();

        saveInLocalStorage(cfgCopy);

        return cfgCopy;
      });
    },
    setFrameLimit: function (value) {
      update((cfg) => {
        cfgCopy = Object.assign({}, cfg);
        cfgCopy.multiInputFrameLimit = value < 0 ? 0 : parseInt(value);

        saveInLocalStorage(cfgCopy);

        return cfgCopy;
      });
    },
    setOrientation: function (value) {
      update((cfg) => {
        cfgCopy = Object.assign({}, cfg);
        cfgCopy.orientation = value;

        saveInLocalStorage(cfgCopy);

        return cfgCopy;
      });
    },
    setSelectedGamepad: function (index) {
      update((cfg) => {
        cfgCopy = Object.assign({}, cfg);
        cfgCopy.choosenPad = index;

        saveInLocalStorage(cfgCopy);

        return cfgCopy;
      });
    },
  };
}

export const config = createConfig();
