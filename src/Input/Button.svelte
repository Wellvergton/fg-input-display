<script>
  export let isPressed;
</script>

<i class={`fa${isPressed ? "s" : "r"} fa-circle`} />

<style>
  i {
    margin-right: 3px;
  }
</style>
