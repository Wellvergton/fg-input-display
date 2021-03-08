import { writable } from "svelte/store";

function saveInLocalStorage(value) {
  localStorage.setItem("mapping", JSON.stringify(value));
}

function createMapping() {
  let localMapping = JSON.parse(localStorage.getItem("mapping"));
  let currentMapping;

  if (localMapping) {
    currentMapping = Object.assign({}, localMapping);
  }

  const { subscribe, set } = writable(currentMapping);

  return {
    subscribe,
    save: function (mapping) {
      if (Object.keys(mapping).length !== 0) {
        set(mapping);
        saveInLocalStorage(mapping);
      }
    },
  };
}

export const mapping = createMapping();
