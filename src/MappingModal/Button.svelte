<script>
  import { createEventDispatcher } from "svelte";

  export let color;
  export let value;

  const dispatch = createEventDispatcher();

  function notify() {
    dispatch("click", {
      value,
      color,
    });
  }
</script>

<div on:click={notify} style={`background-color: ${color}`} />

<style>
  div {
    box-sizing: unset;
    width: 50px;
    height: 50px;
    border: 3px solid black;
    border-radius: 40px;
    cursor: pointer;
    margin: 6px;
  }
</style>
