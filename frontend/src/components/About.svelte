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
              Joined<br>University
              <br>
              <span class="year">2017</span>
            </div>
            <div class="info-vertical-line"></div>
          </div>
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
              <span class="year">2021</span>
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
          <li>Restful webservices</li>
          <li>GraphQL</li>
          <li>System Design</li>
          <li>Microservice architecture</li>
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
          <li>Elastic Search stack</li>
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
        background: rgb(3, 2, 9);
        background: linear-gradient(0deg, rgba(3, 2, 9, 1) 0%, rgba(17, 14, 120, 1) 100%);
        background-blend-mode: saturation;
        mix-blend-mode: darken;
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

    .experience {
        opacity: 0;
        animation: appear 3s ease-in forwards;
    }

    .qualification {
        width: 100%;
        opacity: 0;
        animation: appear 3.3s ease-in forwards;
    }

    .qualification-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .info-above {
        width: 80%;
        justify-content: space-evenly;
        display: flex;
    }

    .info-below {
        display: flex;
        width: 80%;
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
        opacity: 0;
        animation: appear 3.5s ease-in forwards;
    }

    .skills-body {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }

    li {
        margin: 6px 0;
    }

    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }


    @media only screen and (max-width: 600px) and (max-height: 670px) {

    }

    @media only screen and (max-width: 915px) and (max-height: 414px) {


    }

    @media only screen and (max-width: 600px) {

        .info-item {
            font-size: 0.5rem;
        }

        .skills-body {
            width: 90%;
        }

        li {
            font-size: 0.6rem;
        }
    }

    @media only screen and (min-width: 600px) and (max-width: 850px) and (max-height: 450px) {

    }

    @media only screen and (min-width: 760px) and (max-width: 820px) and (max-height: 1200px) {

    }


</style>