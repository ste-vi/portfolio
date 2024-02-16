<script>

</script>

<section class="container" id="about">
  <div class="content">

    <div class="experience mb-2">
      <div class="title mb-1">Experience</div>
      <div class="experience-description">
        <span>+4 years of commercial work</span>
        <br>
        <span>+4 projects participated on</span>
      </div>
    </div>

    <div class="qualification mb-2">
      <div class="title mb-1">Qualification</div>
      <div class="qualification-body">

        <div class="info-above">
          <div class="info-item">
            <div class="info-item-text">
              Ecommerce<br>project
              <br>
              <span class="year">2020</span>
            </div>
            <div class="info-vertical-line"></div>
          </div>
          <div class="info-item">
            <div class="info-item-text">
              Computer Science<br>Bachelor degree
              <br>
              <span class="year">2021</span>
            </div>
            <div class="info-vertical-line"></div>
          </div>
          <div class="info-item">
            <div class="info-item-text">
              Passed Middle Java Developer<br>Certification at Inventorsoft
              <br>
              <span class="year">2022</span>
            </div>
            <div class="info-vertical-line"></div>
          </div>
          <div class="info-item">
            <div class="info-item-text">
              Passed Senior Java Developer<br>Certification at Inventorsoft
              <br>
              <span class="year">2024</span>
            </div>
            <div class="info-vertical-line"></div>
          </div>
        </div>

        <div class="line">

        </div>

        <div class="info-below">
          <div class="info-item">
            <div class="info-vertical-line"></div>
            <div class="info-item-text">
              Junior Java Developer<br>at Inventorsoft
              <br>
              <span class="year">2020</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-vertical-line"></div>
            <div class="info-item-text">
              Building management<br>system project<br>
              <span class="year">2021</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-vertical-line"></div>
            <div class="info-item-text">
              Physical supply<br>chain project<br>
              <span class="year">2022</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-vertical-line"></div>
            <div class="info-item-text">
              Digital supply<br>chain project<br>
              <span class="year">2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="skills">
      <div class="title">Skills</div>
      <div class="skills-body">
        <ul>
          <li>Java</li>
          <li>Spring</li>
          <li>Spring Boot</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>System Design</li>
          <li>Microservice</li>
        </ul>
        <ul>
          <li>SQL</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>JDBC</li>
          <li>Hibernate</li>
        </ul>
        <ul>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>AWS</li>
          <li>GCP</li>
          <li>Elastic Search</li>
          <li>CI/CI tools</li>
          <li>Agile</li>
        </ul>
      </div>
    </div>
  </div>

</section>


<style>
    .container {
        overflow-x: hidden;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .content {
        background: linear-gradient(0deg, rgba(3, 2, 9, 1) 0%, rgba(17, 14, 120, 1) 100%);
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .mb-1 {
        margin-bottom: 1.1rem;
    }

    .mb-2 {
        margin-bottom: 3.6rem;
    }

    .title {
        font-size: 1.6rem;
        text-align: center;
        padding-top: 2rem;
    }

    .year {
        font-weight: bold;
    }

    .qualification {
        width: 100%;
    }

    .qualification-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .info-above {
        width: 92%;
        margin-left: 4rem;
        justify-content: space-evenly;
        display: flex;
    }

    .info-below {
        display: flex;
        margin-right: 4rem;
        width: 88%;
        justify-content: space-evenly;
    }

    .info-item {
        font-size: 0.7rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .info-item-text {
        margin-bottom: 4px;
        margin-top: 4px;
    }

    .info-vertical-line {
        height: 12px;
        width: 1px;
        border-left: 1px solid white;
    }

    .line {
        width: 80%;
        border-bottom: 3px solid white;
    }

    .skills {
        width: 100%;
    }

    .skills-body {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }

    li {
        margin: 6px 0;
    }

    @media only screen and (max-width: 600px) {

        .info-above {
            width: 90%;
            margin-right: 0;
        }

        .info-below {
            width: 90%;
            margin-left: 0;
        }

        .line {
            width: 87%;
        }

        .info-item {
            font-size: 0.5rem;
        }

        .skills-body {
            width: 94%;
        }

        li {
            font-size: 0.6rem;
        }

        .mb-2 {
            margin-bottom: 1rem;
        }
    }

    @media only screen and (min-width: 600px) and (max-width: 1000px) and (max-height: 800px) {
        .mb-2 {
            margin-bottom: 0;
        }

        .mb-1 {
            margin-bottom: 0.5rem;
        }

        .title {
            font-size: 1.2rem;
            padding-top: 0.5rem;
        }

        .info-item {
            font-size: 0.5rem;
        }

        .experience-description {
            font-size: 0.8rem;
        }

        li {
            font-size: 0.6rem;
            margin: 2px 0;
        }
    }

    @media only screen and (min-width: 760px) and (max-width: 820px) and (max-height: 1200px) {

    }


</style>