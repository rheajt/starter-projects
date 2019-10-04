<style lang="scss">
  $color: #2c3e50;

  button {
    background-color: $color;
    font-size: 1.2rem;
    padding: 0.25rem 1rem;
    outline: 0;
    border: 0;
    &:hover {
      color: white;
    }
  }
</style>

<button on:click>
  <slot />
</button>
