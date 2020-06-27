<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
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

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  .container {
    display: grid;
    grid-template-columns: auto auto;
  }

  .audio {
    display: grid;
    justify-content: start;
    align-self: center;
  }
</style>

<svelte:head>
  <title>Coffee Not Pods</title>
</svelte:head>

<h1>Coffee Not Pods</h1>
<div class="container">
  <img alt="Night Owl" src="night-owl.svg" />
  <div class="audio">
    Episode 0: What is Devops?
    <audio controls>
      <source src="Lobo_Loco-Inspector_Unvisible.mp3" type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>
  </div>
</div>
<p>
  <strong>A podcast about Devops, devops, devOps, and DevOps.</strong>
</p>
