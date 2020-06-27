<script context="module">
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

  .container {
    display: grid;
    grid-template-columns: 1fr, 1fr;
  }

  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Archive</title>
</svelte:head>

<h1>Listen to the past.</h1>
<div class="container">
  <img alt="Boombox" src="Boombox.png" />
  <ul>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li>
        <a rel="prefetch" href="archive/{post.slug}">{post.title}</a>
      </li>
    {/each}
  </ul>
</div>
