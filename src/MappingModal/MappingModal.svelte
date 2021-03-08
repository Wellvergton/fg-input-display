<script>
  import { config } from "../stores/config.js";
  import { onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import mappingHandler from "../handlers/mappingHandler.js";
  import FourButtonsCross from "./FourButtonsCross.svelte";
  import FourButtonsInline from "./FourButtonsInline.svelte";
  import SixButtons from "./SixButtons.svelte";

  export let onClose;

  const layouts = {
    fourButtonsCross: FourButtonsCross,
    fourButtonsInline: FourButtonsInline,
    sixButtons: SixButtons,
  };
  const messages = {
    waiting: "Click in a button for mapping",
    handling: "Press the correspondig button",
  };
  let currentMessage = messages.waiting;
  let messageColor = "black";

  mappingHandler.onButtonMapped(() => {
    currentMessage = messages.waiting;
    messageColor = "black";
  });

  function handleClick(event) {
    currentMessage = messages.handling;
    messageColor = event.detail.color;
    mappingHandler.setButtonForMapping(event.detail.value);
  }

  onDestroy(mappingHandler.onFinishMapping);
</script>

<div class="modal" transition:fade>
  <div class="background" on:click={onClose} />
  <div class="content">
    <button on:click={onClose}>
      <i class="fas fa-times fa-2x" />
    </button>
    <svelte:component
      this={layouts[$config.buttonsLayout]}
      on:click={handleClick}
    />
    <div
      class={`message ${messageColor === "white" ? "with-border" : ""}`}
      style={`color: ${messageColor}`}
    >
      <p>{currentMessage}</p>
    </div>
  </div>
</div>

<style>
  .modal {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .background {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .content {
    width: 370px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 17px;
    left: 17px;
    padding: 0;
    cursor: pointer;
  }

  .message {
    margin-top: 70px;
    font-weight: bold;
  }

  .message.with-border {
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black,
      1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
  }
</style>
