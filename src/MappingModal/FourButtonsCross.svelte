<script>
  import Button from "./Button.svelte";

  const topButtons = ["green", "blue"];
  const bottomButtons = ["red", "orange"];
</script>

<div class="group">
  <div class="top">
    {#each topButtons as button, index}
      <Button color={button} value={index + 2} on:click />
    {/each}
  </div>
  <div class="bottom">
    {#each bottomButtons as button, index}
      <Button color={button} value={index} on:click />
    {/each}
  </div>
</div>

<style>
  .group {
    display: flex;
    flex-direction: column;
    transform: rotate(-45deg);
  }

  .top,
  .bottom {
    display: flex;
  }
</style>
