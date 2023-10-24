<script>
  let projects = [
    {
      "name": "Project Two",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Kubernetes", "GraphQL", "Docker", "Microservices", "AWS"],
      "description": "The application is a big platform that helps large and middle-size companies/factories control the quality of products their produce and manage relationships between suppliers and consumers.",
      "responsibilities": "- Worked closely with the development team under the Agile (Scrum) methodology\n" +
        "to deliver high-quality software.\n" +
        "- Implemented new business requirements by developing new modules from\n" +
        "scratch based on the Spring framework.\n" +
        "- Participated in support activities, investigated and resolved issues, and\n" +
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
    }
  ];

</script>

<section class="container" id="work">
  <div class="content">
    <div class="title">
      Recent Projects
    </div>

    <div class="cards">
      {#each projects as project}
        <div class="card">
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

    .cards {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 86%;
        justify-content: center;
        align-items: start;
        margin-top: 2rem;
        margin-left: 2rem;
        margin-right: 2rem;

        overflow-x: auto;
        flex-wrap: nowrap;

        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;

        padding-bottom: 2rem;
    }

    .card {
        background-color: transparent;
        height: fit-content;
        min-height: 65vh;
        max-width: 500px;
        min-width: 400px;
        border-radius: 7px;
        padding: 1.2rem;
        flex: 1 0 auto;
        cursor: pointer;
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
        font-size: 0.84rem;
        white-space: pre-line;
    }

    .responsibilities {
        white-space: pre-line;
        font-size: 0.84rem;
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