<script>
  import "../app.css";
  import { onMount } from "svelte";

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

</script>


<slot />
