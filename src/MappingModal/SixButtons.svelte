<script>
  import Button from "./Button.svelte";

  const topButtons = ["green", "blue", "blueviolet"];
  const bottomButtons = ["red", "orange", "white"];
</script>

<div class="group">
  <div class="top">
    {#each topButtons as button, index}
      <Button color={button} value={index + 2} on:click />
    {/each}
  </div>
  <div class="bottom">
    {#each bottomButtons as button, index}
      <Button color={button} value={index === 2 ? 5 : index} on:click />
    {/each}
  </div>
</div>

<style>
  .group {
    display: flex;
    flex-direction: column;
  }

  .top,
  .bottom {
    display: flex;
  }
</style>
