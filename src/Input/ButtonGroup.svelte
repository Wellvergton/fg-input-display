<script>
  import Button from "./Button.svelte";

  export let pressedButtons;
  export let topButtons;
  export let bottomButtons;
</script>

<div class="top">
  {#each topButtons as button}
    <Button isPressed={pressedButtons.includes(button)} />
  {/each}
</div>
<div class="bottom">
  {#each bottomButtons as button}
    <Button isPressed={pressedButtons.includes(button)} />
  {/each}
</div>

<style>
  .top {
    margin-bottom: 3px;
  }

  .top,
  .bottom {
    display: flex;
  }
</style>
