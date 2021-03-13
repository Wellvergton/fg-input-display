<script>
  import { connectedGamepads } from "../stores/connectedGamepads.js";
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import FrameLimitInput from "./FrameLimitInput.svelte";
  import LayoutSelect from "./LayoutSelect.svelte";
  import GamepadSelect from "./GamepadSelect.svelte";
  import OrientationSelect from "./OrientationSelect.svelte";

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }
</script>

<div class="menu">
  <div class="background" on:click={close} transition:fade />
  <div
    class="options"
    in:fly={{ x: -1000, duration: 1000 }}
    out:fly={{ x: -1000, duration: 1000 }}
  >
    <div class="header">
      <button tabindex="0" on:click={close} on:keypress={close}>
        <i class="fas fa-arrow-left fa-2x" />
      </button>
      <span>Settings</span>
    </div>
    {#if Object.keys($connectedGamepads).length > 1}
      <div class="option">
        <GamepadSelect />
      </div>
    {/if}
    <div class="option">
      <LayoutSelect on:show-mapper />
    </div>
    <div class="option">
      <FrameLimitInput />
    </div>
    <div class="option">
      <OrientationSelect />
    </div>
  </div>
</div>

<style>
  .menu {
    width: 100vw;
    height: 100vh;
    position: fixed;
  }

  .background {
    background-color: black;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .options {
    height: 100%;
    padding: 20px;
    background-color: white;
    position: fixed;
  }

  .header {
    font-size: x-large;
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 40px;
  }

  .header button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: unset;
    width: min-content;
  }

  .header span {
    font-weight: bold;
    text-align: end;
  }

  .option {
    margin: 50px 0;
  }
</style>
