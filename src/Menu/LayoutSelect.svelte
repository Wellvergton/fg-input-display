<script>
  import { config } from "../stores/config.js";
  import { moves } from "../stores/moves.js";
  import { createEventDispatcher } from "svelte";
  import onKeypress from "../res/onKeyboardSelect.js";
  import FourButtonsCross from "../Input/FourButtonsCross.svelte";
  import FourButtonsInline from "../Input/FourButtonsInline.svelte";
  import SixButtons from "../Input/SixButtons.svelte";

  const buttons = [0, 1, 2, 3, 4, 5];
  const configOptios = ["fourButtonsCross", "fourButtonsInline", "sixButtons"];
  const layouts = [FourButtonsCross, FourButtonsInline, SixButtons];
  const dispatch = createEventDispatcher();

  function showMapper() {
    dispatch("show-mapper");
  }

  function onSelect(layout) {
    let numberOfButtons = layout === "sixButtons" ? 6 : 4;
    config.setLayout(layout, numberOfButtons);
    moves.clear();
  }
</script>

<div>
  <span>Layout</span>
  <div class="select">
    {#each configOptios as option, index}
      <div
        class={`col ${$config.buttonsLayout === option ? "selected" : ""}`}
        tabindex="0"
        on:keypress={(event) => onKeypress(event, () => onSelect(option))}
        on:click={() => onSelect(option)}
      >
        <svelte:component this={layouts[index]} pressedButtons={buttons} />
      </div>
    {/each}
  </div>
  <button on:click={showMapper}>Remap pad</button>
</div>

<style>
  span {
    display: inline-block;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .select {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .col {
    height: 70px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .col.selected {
    border: 2px solid cyan;
    border-radius: 6px;
    outline: none;
  }

  button {
    background-color: cyan;
    border: none;
    border-radius: 5px;
    padding: 15px 20px;
    margin-top: 30px;
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;
  }
</style>
