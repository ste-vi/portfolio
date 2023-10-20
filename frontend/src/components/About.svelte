<script>

  import Leftnav from "./Leftnav.svelte";
</script>

<section class="container">
  <div class="content">
    <Leftnav />
    <div class="experience">

    </div>
  </div>

</section>


<style>
    .container {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .content {
        background: rgb(3, 2, 9);
        background: linear-gradient(0deg, rgba(3, 2, 9, 1) 0%, rgba(17, 14, 120, 1) 100%);
        background-blend-mode: saturation;
        mix-blend-mode: darken;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .experience {
      flex: 1;
    }
</style>