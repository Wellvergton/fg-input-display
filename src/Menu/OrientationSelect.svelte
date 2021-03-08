<script>
  import { config } from "../stores/config.js";

  let selected;
  const layouts = ["vertical", "horizontal"];

  function setOrientation(value) {
    config.setOrientation(value);
  }
</script>

<div>
  <span class="label">Orientation</span>
  <div class="select">
    <!-- svelte-ignore a11y-no-onchange -->
    <select bind:value={selected} on:change={setOrientation(selected)}>
      {#each layouts as layout}
        <option value={layout} selected={$config.orientation === layout}>
          {layout === "vertical" ? "Vertical" : "Horizontal"}
        </option>
      {/each}
    </select>
  </div>
</div>

<style>
  .label {
    font-weight: bold;
    margin-right: 10px;
  }

  .select {
    display: inline-flex;
    align-items: center;
  }

  .select::after {
    content: "";
    width: 10px;
    height: 10px;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    position: relative;
    right: 27px;
    bottom: 2px;
    transform: rotate(45deg);
    pointer-events: none;
  }

  .select select {
    appearance: none;
    border: none;
    border-radius: 6px;
    background-color: cyan;
    padding: 7px 40px 7px 14px;
    cursor: pointer;
  }
</style>
