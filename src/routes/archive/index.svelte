<script context="module">
  import { fade, fly } from "svelte/transition";
  export function preload({ params, query }) {
    return this.fetch(`archive.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
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
    grid-template-columns: 1fr, 1fr;
  }

  ul {
    margin: 20 0 1em 0;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    font-size: 35px;
    font-weight: 700;
    padding: 5px;
    margin: 5px;
  }

  a:hover {
    border-bottom: 1px solid slategrey;
  }
</style>

<svelte:head>
  <title>Archive</title>
</svelte:head>
<main>
  <h1 in:fly={{ x: 200, duration: 2000 }}>Listen to the past.</h1>
  <div class="container">
    <img alt="Boombox" src="Boombox.png" />
    <ul>
      {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
        <div>
          <a rel="prefetch" href="archive/{post.slug}">{post.title}</a>
        </div>
      {/each}
    </ul>
  </div>
</main>
