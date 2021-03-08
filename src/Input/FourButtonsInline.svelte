<script>
  import Button from "./Button.svelte";

  export let pressedButtons;
  let buttons = [0, 1, 2, 3];
</script>

<div class="group">
  <div>
    <Button isPressed={pressedButtons.includes(buttons[0])} />
  </div>
  {#each buttons.slice(1) as button}
    <Button isPressed={pressedButtons.includes(button)} />
  {/each}
</div>

<style>
  .group {
    display: flex;
  }

  .group > div:first-child {
    margin-top: 8px;
  }
</style>
