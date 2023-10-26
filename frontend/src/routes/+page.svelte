<script lang="ts">

  import Home from "../components/Home.svelte";
  import About from "../components/About.svelte";
  import Work from "../components/Work.svelte";
  import Contact from "../components/Contact.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<Home />
<About />
<Work />
<Contact emailForm={data.form} />
