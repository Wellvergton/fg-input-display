<script>
  import { config } from "../stores/config.js";
  import onKeypress from "../res/onKeyboardSelect.js";

  function decrement() {
    if ($config.multiInputFrameLimit > 1) {
      config.setFrameLimit($config.multiInputFrameLimit - 1);
    }
  }

  function increment() {
    if ($config.multiInputFrameLimit < 10) {
      config.setFrameLimit($config.multiInputFrameLimit + 1);
    }
  }
</script>

<div>
  <span class="label">Mult input frame limit</span>
  <div class="input">
    <div class="grid">
      <div
        class="minus"
        tabindex="0"
        on:click={decrement}
        on:keypress={(event) => onKeypress(event, decrement)}
      >
        -
      </div>
      <div class="value">{$config.multiInputFrameLimit}</div>
      <div
        class="plus"
        tabindex="0"
        on:click={increment}
        on:keypress={(event) => onKeypress(event, increment)}
      >
        +
      </div>
    </div>
  </div>
</div>

<style>
  .label {
    font-weight: bold;
    margin-right: 10px;
  }

  .input {
    display: inline-block;
    border: 1px solid cyan;
    border-radius: 6px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .grid div {
    padding: 7px 14px;
    text-align: center;
  }

  .minus,
  .plus {
    background-color: cyan;
    cursor: pointer;
    font-size: large;
    font-weight: bolder;
  }

  .value {
    width: 50px;
  }
</style>
