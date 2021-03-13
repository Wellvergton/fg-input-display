<script>
  import { config } from "../stores/config.js";
  import { connectedGamepads } from "../stores/connectedGamepads.js";
  import { moves } from "../stores/moves.js";

  let selected;

  function setSelectedGamepad(gamepadIndex) {
    config.setSelectedGamepad(gamepadIndex);
    moves.clear();
  }

  function format(string) {
    let temp = string.slice(string.indexOf("-") + 1);

    return temp.slice(temp.indexOf("-") + 1);
  }
</script>

<div>
  <span class="label">Gamepad</span>
  <div class="select">
    <!-- svelte-ignore a11y-no-onchange -->
    <select bind:value={selected} on:change={setSelectedGamepad(selected)}>
      {#each Object.keys($connectedGamepads) as padIndex}
        <option value={padIndex} selected={$config.choosenPad === padIndex}>
          {format($connectedGamepads[padIndex].id)}
        </option>
      {/each}
    </select>
  </div>
</div>

<style>
  .label {
    font-weight: bold;
    margin-right: 10px;
  }

  .select {
    display: inline-flex;
    align-items: center;
  }

  .select::after {
    content: "";
    width: 10px;
    height: 10px;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    position: relative;
    right: 27px;
    bottom: 2px;
    transform: rotate(45deg);
    pointer-events: none;
  }

  .select select {
    appearance: none;
    border: none;
    border-radius: 6px;
    background-color: cyan;
    padding: 7px 40px 7px 14px;
    cursor: pointer;
  }
</style>
