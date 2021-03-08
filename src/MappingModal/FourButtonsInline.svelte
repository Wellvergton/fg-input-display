<script>
  import Button from "./Button.svelte";

  const buttons = ["red", "orange", "green", "blue"];
</script>

<div class="group">
  {#each buttons as button, index}
    <div class="button-wrapper">
      <Button color={button} value={index} on:click />
    </div>
  {/each}
</div>

<style>
  .group {
    display: flex;
    flex-direction: row;
  }

  .button-wrapper:first-child {
    position: relative;
    top: 32px;
    right: 4px;
  }
</style>
