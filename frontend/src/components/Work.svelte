<script>
  let projects = [
    {
      "name": "Project One",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes"],
      "description": "Desc",
      "responsibilities": "Worked closely with the development team under the Agile (Scrum) methodology\n" +
        "to deliver high-quality software.\n" +
        "Implemented new business requirements by developing new modules from\n" +
        "scratch based on the Spring framework.\n" +
        "Participated in support activities, investigated and resolved issues, and\n" +
        "implemented new technical solutions"
    },
    {
      "name": "Project Two",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes", "GraphQL", "Docker", "Microservices", "AWS"],
      "description": "The application is a big platform that helps large and middle-size companies/factories control the quality of products their produce and manage relationships between suppliers and consumers.",
      "responsibilities": "Worked closely with the development team under the Agile (Scrum) methodology\n" +
        "to deliver high-quality software.\n" +
        "Implemented new business requirements by developing new modules from\n" +
        "scratch based on the Spring framework.\n" +
        "Participated in support activities, investigated and resolved issues, and\n" +
        "implemented new technical solutions"
    },
    {
      "name": "Project Three",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes", "GraphQL", "Docker", "Microservices", "AWS"],
      "description": "The application is a big platform that helps large and middle-size companies/factories control the quality of products their produce and manage relationships between suppliers and consumers.",
      "responsibilities": "- Worked closely with the development team under the Agile (Scrum) methodology\n" +
        "to deliver high-quality software.\n" +
        "- Implemented new business requirements by developing new modules from\n" +
        "scratch based on the Spring framework.\n" +
        "- Participated in support activities, investigated and resolved issues, and" +
        "implemented new technical solutions\n" +
        "- Maintained the server to ensure the stability and security of the application.\n" +
        "- Took part in continuous releases of projects on time, meeting client expectations.\n" +
        "- Refactored source code which helped in a project's development speed and\n" +
        "efficiency"
    },
    {
      "name": "Project Four",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes", "GraphQL", "Docker", "Microservices", "AWS"],
      "description": "The application is a big platform that helps large and middle-size companies/factories control the quality of products their produce and manage relationships between suppliers and consumers.",
      "responsibilities": "Worked closely with the development team under the Agile (Scrum) methodology\n" +
        "to deliver high-quality software.\n" +
        "Implemented new business requirements by developing new modules from\n" +
        "scratch based on the Spring framework.\n" +
        "Participated in support activities, investigated and resolved issues, and\n" +
        "implemented new technical solutions"
    }
  ];


  let scrollPosition = 0;
  let cardWidth = 200;
  let numberOfCards = projects.length;
  let currentCard = 0;

  let currentIndex = 0;

  currentIndex = Math.floor(numberOfCards / 2);
  console.log(currentIndex);


  function scrollLeft() {
    currentIndex--;
    console.log(currentIndex);


    if (currentIndex > 0) {
      scrollPosition = scrollPosition + cardWidth;
    } else {
      currentIndex = numberOfCards - 1;
      scrollPosition = 0 - (cardWidth * currentIndex);
    }

  }

  function scrollRight() {
    currentIndex++;
    if (currentIndex == currentIndex % numberOfCards) {

    }
    console.log(currentIndex);

    //currentIndex = (currentIndex + 1) % numberOfCards;
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
        {#each projects as project, index (index)}
          <div class="card" style="transform: translateX({scrollPosition}px);" bind:clientWidth={cardWidth}>
            {index}

            <div class="image">
              <img src="/test.png" alt="image" />
            </div>
            <div class="name">
              {project.name}
            </div>
            <div class="stack">
              {#each project.stack as item}
                <div class="stack-item">
                  {item}
                </div>
              {/each}
            </div>
            <div class="description">
              <b>Description:</b><br>
              <p>
                {project.description}
              </p>
            </div>
            <div class="responsibilities">
              <b>Responsibilities:</b><br>
              <p>
                {project.responsibilities}
              </p>
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
        padding-top: 3rem;
    }

    .cards-content {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        margin-top: 2rem;
        margin-left: 2rem;
        margin-right: 2rem;
        align-items: center;
        gap: 1.8rem;
    }

    .cards {
        display: flex;
        flex-direction: row;
        gap: 1rem;
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
        background-color: transparent;
        height: fit-content;
        min-height: 65vh;
        max-width: 500px;
        min-width: 400px;

        border-radius: 7px;
        padding: 1.2rem;
        flex: 0 0 auto;
        cursor: pointer;
        display: inline-block;
        transition: transform 0.5s ease-in-out;
    }

    .card:hover {
        background-color: rgba(62, 35, 224, 0.2);
    }

    .name {
        font-weight: bold;
        font-size: 1.4rem;
        margin-bottom: 1rem;
        margin-top: 0.6rem;
    }

    .image {
        padding-top: 0.5rem;
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

    .description {
        padding-top: 1rem;
        padding-bottom: 0.1rem;
        font-size: 0.74rem;
        white-space: pre-line;
    }

    .responsibilities {
        white-space: pre-line;
        font-size: 0.74rem;
    }

    svg {
        cursor: pointer;
    }

    path:hover {
        fill: #364be8 !important;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) and (max-height: 670px) {

    }

    @media only screen and (max-width: 915px) and (max-height: 414px) {


    }

    @media only screen and (max-width: 600px) {
        .cards {
            max-width: 0;
            min-width: 300px;
            width: 80%;
        }

    }

    @media only screen and (min-width: 600px) and (max-width: 850px) and (max-height: 450px) {

    }

    @media only screen and (min-width: 760px) and (max-width: 820px) and (max-height: 1200px) {

    }

</style>