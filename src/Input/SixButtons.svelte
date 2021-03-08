<script>
  import ButtonGroup from "./ButtonGroup.svelte";

  export let pressedButtons;
  const topButtons = [2, 3, 4];
  const bottomButtons = [0, 1, 5];
</script>

<div>
  <ButtonGroup {pressedButtons} {topButtons} {bottomButtons} />
</div>
