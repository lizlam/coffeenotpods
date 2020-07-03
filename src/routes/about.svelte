<script>
  import { fade, fly } from "svelte/transition";
</script>

<style>
  h1 {
    font-size: 5.8em;
    font-weight: 700;
    color: black;
    margin: 0 0 0.5em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    opacity: 1;
  }

  .container {
    display: grid;
    grid-template-rows: 400px, auto;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>
<main>
  <h1 in:fly={{ x: 200, duration: 2000 }}>This is a pirate.</h1>
  <div class="container">
    <img alt="parrot" src="parrot-captain.svg" />
  </div>
</main>
