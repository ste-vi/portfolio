<script>

  import Leftnav from "./Leftnav.svelte";
</script>

<section class="container">
  <div class="content">
    <Leftnav />
    <div class="work">

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
        background: rgb(20,16,65);
        background: linear-gradient(0deg, rgba(20,16,65,1) 9%, rgba(3,2,9,1) 100%);        background-blend-mode: saturation;
        mix-blend-mode: darken;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .work {
      flex: 1;
    }
</style>