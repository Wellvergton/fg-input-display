import { writable } from "svelte/store";

function createMoves() {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    addMove: function (move) {
      let copy;

      update((moves) => {
        if (moves.length === 200) {
          copy = moves.slice(1);
        } else {
          copy = Array.from(moves);
        }

        copy.push(move);

        return copy;
      });
    },
    clear: function () {
      set([]);
    },
  };
}

export const moves = createMoves();
