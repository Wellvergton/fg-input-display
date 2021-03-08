<script>
  import { moves } from "./stores/moves.js";
  import { config } from "./stores/config.js";
  import { connectedGamepads } from "./stores/connectedGamepads.js";
  import Arrow from "./Input/Arrow.svelte";
  import ButtonInput from "./Input/ButtonInput.svelte";
  import MappingModal from "./MappingModal/MappingModal.svelte";
  import Menu from "./Menu/Menu.svelte";
  import PressButtonModal from "./PressButtonModal.svelte";

  let showMenu = false;
  let showMapper = false;

  function setShowMenu() {
    showMenu = !showMenu;
  }

  function setShowMapper() {
    showMapper = !showMapper;
  }
</script>

{#if showMenu}
  <Menu on:close={setShowMenu} on:show-mapper={setShowMapper} />
{/if}

{#if Object.keys($connectedGamepads).length === 0}
  <PressButtonModal />
{/if}

{#if showMapper}
  <MappingModal onClose={setShowMapper} />
{/if}

<main class={`${$config.orientation}`}>
  <div
    class={`settings ${$config.orientation === "vertical" ? "vertical" : ""}`}
  >
    <i class="fas fa-cogs fa-3x" on:click={setShowMenu} />
  </div>
  <div class="container">
    <div class="inputs">
      {#if !showMenu || !showMapper}
        {#each $moves as move}
          <div class="input-wraper">
            {#if move.type === "arrow"}
              <svelte:component
                this={Arrow}
                direction={move.direction}
                rotate={move.rotate}
              />
            {:else if move.type === "button"}
              <svelte:component
                this={ButtonInput}
                pressedButtons={move.pressedButtons}
              />
            {/if}
          </div>
        {/each}
      {/if}
    </div>
  </div>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
  }

  main.horizontal {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .container {
    display: flex;
    overflow: hidden;
  }

  .container:hover {
    overflow: auto;
  }

  .vertical .container {
    height: 100vh;
    width: min-content;
    overflow-x: hidden;
    padding: 20px 0;
    float: left;
    flex-direction: column-reverse;
  }

  .horizontal .container {
    flex-direction: row-reverse;
  }

  .horizontal .inputs {
    display: flex;
  }

  .input-wraper {
    display: inline-block;
  }

  .horizontal .input-wraper {
    padding: 20px 10px;
  }

  .vertical .input-wraper {
    padding: 10px 20px;
  }

  .settings {
    padding: 20px;
    display: inline-flex;
  }

  .settings i {
    cursor: pointer;
  }

  .horizontal .settings {
    width: 100vw;
    justify-content: flex-end;
  }

  .vertical .settings {
    height: 100vh;
    align-items: flex-end;
  }
</style>
