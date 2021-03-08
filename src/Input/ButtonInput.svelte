<script>
  import { config } from "../stores/config.js";
  import FourButtonsCross from "./FourButtonsCross.svelte";
  import FourButtonsInline from "./FourButtonsInline.svelte";
  import SixButtons from "./SixButtons.svelte";

  export let pressedButtons;

  const layOuts = {
    fourButtonsCross: FourButtonsCross,
    fourButtonsInline: FourButtonsInline,
    sixButtons: SixButtons,
  };
</script>

<div>
  <svelte:component this={layOuts[$config.buttonsLayout]} {pressedButtons} />
</div>

<style>
  div {
    margin: 0 10px;
  }
</style>
