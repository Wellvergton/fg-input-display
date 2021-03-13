<script>
  export let direction;
  export let rotate;
</script>

<i
  class={`fas fa-arrow-alt-circle-${direction} ${rotate ? "rotate" : ""} fa-2x`}
/>

<style>
  i {
    margin: 0 10px;
  }

  .rotate {
    transform: rotate(45deg);
  }
</style>
