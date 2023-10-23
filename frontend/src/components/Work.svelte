<script>
  let projects = [
    {
      "name": "Ecommerce",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes"],
      "description": "Desc",
      "responsibilities": "Desc"
    },
    {
      "name": "Digital supply chain",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes", "GraphQL", "Docker", "Microservices", "AWS"],
      "description": "Desc",
      "responsibilities": "Desc"
    },
    {
      "name": "Digital supply chain",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes", "GraphQL", "Docker", "Microservices", "AWS"],
      "description": "Desc",
      "responsibilities": "Desc"
    },
    {
      "name": "Digital supply chain",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes", "GraphQL", "Docker", "Microservices", "AWS"],
      "description": "Desc",
      "responsibilities": "Desc"
    },
    {
      "name": "Digital supply chain",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes", "GraphQL", "Docker", "Microservices", "AWS"],
      "description": "Desc",
      "responsibilities": "Desc"
    }
  ];


  let scrollPosition = 0;
  let cardWidth = 200;
  let numberOfCards = projects.length;
  let currentCard = 0;

  function scrollLeft() {
    currentCard = (currentCard - 1 + numberOfCards) % numberOfCards;
    scrollPosition = currentCard * cardWidth;
  }

  function scrollRight() {
    currentCard = (currentCard + 1) % numberOfCards;
    scrollPosition = -(currentCard * cardWidth);
  }
</script>

<section class="container" id="work">
  <div class="content">
    <div class="title">
      Projects
    </div>

    <div class="cards-content">

      <div class="left" on:click={scrollLeft} role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 26 46" fill="none">
          <path
            d="M0.87868 20.8787C-0.292893 22.0503 -0.292893 23.9497 0.87868 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.7868C23.0416 0.615223 21.1421 0.615223 19.9706 1.7868L0.87868 20.8787ZM3 26H4V20H3V26Z"
            fill="white" />
        </svg>
      </div>

      <div class="cards">
        {#each projects as project}
          <div class="card" style="transform: translateX({scrollPosition}px" bind:clientWidth={cardWidth}>
            <div class="name">
              {project.name}
            </div>
            <div class="image">
              <img src="/test.png" alt="image" />
            </div>
            <div class="stack">
              {#each project.stack as item}
                <div class="stack-item">
                  {item}
                </div>
              {/each}
            </div>
            <div class="description">
              {project.description}
            </div>
            <div class="responsibilities">
              {project.responsibilities}
            </div>
          </div>
        {/each}
      </div>

      <div class="right" on:click={scrollRight} role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 26 46" fill="none">
          <path
            d="M25.1213 25.1213C26.2929 23.9497 26.2929 22.0503 25.1213 20.8787L6.02944 1.7868C4.85786 0.615223 2.95837 0.615223 1.7868 1.7868C0.615223 2.95837 0.615223 4.85786 1.7868 6.02944L18.7574 23L1.7868 39.9706C0.615223 41.1421 0.615223 43.0416 1.7868 44.2132C2.95837 45.3848 4.85786 45.3848 6.02944 44.2132L25.1213 25.1213ZM22 26H23V20H22V26Z"
            fill="white" />
        </svg>
      </div>
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
        background: rgb(20, 16, 65);
        background: linear-gradient(0deg, rgba(20, 16, 65, 1) 9%, rgba(3, 2, 9, 1) 100%);
        background-blend-mode: saturation;
        mix-blend-mode: darken;
        align-items: center;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .title {
        font-size: 1.6rem;
        text-align: center;
        padding-top: 4rem;
    }

    .cards-content {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        margin-left: 2rem;
        margin-right: 2rem;
        align-items: center;
        gap: 1.8rem;
    }

    .cards {
        display: flex;
        flex-direction: row;
        margin-top: 4rem;
        gap: 3rem;
        width: 80%;
        justify-content: center;

        overflow-x: auto;
        flex-wrap: nowrap;

        -webkit-overflow-scrolling: touch;

        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            display: none;
        }

    }

    .card {
        background-color: #1d1559;
        height: 64vh;
        max-width: 500px;
        min-width: 400px;
        width: 38%;
        border-radius: 7px;
        padding: 1.2rem;
        flex: 0 0 auto;
        cursor: pointer;
        display: inline-block;

        transition: transform 0.3s ease-in-out;
    }

    .name {
        font-weight: bold;
        font-size: 1.4rem;
    }

    .image {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        width: 100%;
    }

    img {
        border-radius: 7px;
        filter: grayscale(80%) brightness(100%);
        opacity: 0.9;
        width: 100%;
        height: 30vh;
    }

    .stack {
        display: flex;
        flex-direction: row;
        justify-content: start;
        max-height: 20vh;
        width: 100%;
        gap: 10px;
        flex-wrap: wrap;
    }

    .stack-item {
        font-size: 0.8rem;
        border-radius: 30px;
        padding: 0.4rem 0.8rem;
        margin-bottom: 3px;
        background-color: #422cc7;
    }

    svg {
        cursor: pointer;
    }

    path:hover {
        fill: #364be8 !important;
        cursor: pointer;
    }

</style>