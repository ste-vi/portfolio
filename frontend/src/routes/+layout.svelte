<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  onMount(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  inject({ mode: dev ? 'development' : 'production' });

</script>

<slot />
