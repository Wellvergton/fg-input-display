<script>
  import ButtonGroup from "./ButtonGroup.svelte";

  export let pressedButtons;
  const topButtons = [2, 3];
  const bottomButtons = [0, 1];
</script>

<div class="wraper">
  <div class="container">
    <ButtonGroup {pressedButtons} {topButtons} {bottomButtons} />
  </div>
</div>

<style>
  .wraper {
    position: relative;
    z-index: -1;
  }

  .container {
    transform: rotate(-45deg);
  }
</style>
