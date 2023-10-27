<script>
  let projects = [
    {
      "name": "Digital supply chain (USA)",
      "imageSrc": "/project2.jpg",
      "stack": ["Java 17", "Spring", "PostgreSQL", "GraphQL", "Kubernetes", "Docker", "Microservices", "AWS", "GitHub Actions", "Junit", "Mockito"],
      "description": "The system is a bundle of microservices that help to distribute and manage digital media assets (video, audio, images) of one of the biggest music labels in the world.",
      "responsibilities": "- Took part in rewriting legacy system into the microservices architecture.\n" +
        "- Implemented business requirements by developing new modules.\n" +
        "- Took part in continuous releases of projects on time, meeting client expectations.\n" +
        "- Implemented new business requirements by developing new modules.\n" +
        "- Optimized the performance of an application by reducing database hits, adding cache, and constantly monitoring execution time during development.\n" +
        "- Refactored source code which helped in a project's development speed and efficiency.\n"
    },
    {
      "name": "Physical supply chain (France)",
      "imageSrc": "/project1.jpg",
      "stack": ["Java 17", "Spring", "PostgreSQL", "Hibernate", "Docker", "Kubernetes", "GCP", "Redis", "Elastic Search", "Hibernate", "Junit", "Mockito"],
      "description": "The application is a big platform that helps large and middle-size companies/factories control the quality of products their produce and manage relationships between suppliers and consumers.",
      "responsibilities": "- Worked closely with the large development team under the Agile (Scrum) methodology to deliver high-quality software.\n" +
        "- Participated in support activities, investigated and resolved different king of issues.\n" +
        "- Analyzed and implemented new technical solutions.\n" +
        "- Wrote clean and fully covered unit and integration tests to ensure the quality of the software.\n" +
        "- Conducted code reviews and provided constructive feedback to team members."
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
            <img src="{project.imageSrc}" alt="music" />
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
        flex: 0 0 auto;
        cursor: pointer;
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
        filter: grayscale(10%) brightness(100%);
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
        line-height: 1.3;
    }

    @media only screen and (min-width: 700px) and (max-width: 1220px) {
        .cards {
            justify-content: flex-start;
            width: 90%;
        }
    }

    @media only screen and (min-width: 800px) and (max-width: 1280px) and (min-height: 600px) and (max-height: 900px) {
        .cards {
            margin-top: 1rem;
        }
        .title {
            padding-top: 1rem;
        }
    }

    @media only screen and (max-width: 700px) {
        .cards {
            margin-top: 0.5rem;
            padding-bottom: 2rem;
            justify-content: flex-start;
            width: 98%;
            font-size: 0.1rem;
            gap: 0;
            overflow-y: hidden;
        }

        .title {
            padding-top: 1rem;
        }

        .name {
            font-size: 1rem;
            margin-top: 0.6rem;
        }

        img {
            height: 24vh;
        }

        .card {
            min-height: fit-content;
            padding-right: 1rem;
            max-width: 90%;
            min-width: 90%;
        }

        .stack-item {
            font-size: 0.71rem;
            border-radius: 30px;
            padding: 0.4rem 0.8rem;
            margin-bottom: 3px;
            background-color: #422cc7;
        }

        .description {
            padding-top: 1rem;
            padding-bottom: 0.1rem;
            font-size: 0.71rem;
            white-space: pre-line;
        }

        .responsibilities {
            white-space: pre-line;
            font-size: 0.71rem;
            line-height: 1.3;
        }

    }

</style>