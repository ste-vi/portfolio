<script>
  import { enhance } from "$app/forms";

  const gutHubDomain = "https://github.com";
  const gitHubUrl = gutHubDomain + "/stevi-u";

  const linkedInDomain = "https://www.linkedin.com/in";
  const linkedInUrl = linkedInDomain + "/vitalii-stefanchak";

</script>

<section class="container" id="contact">
  <div class="content">
    <div class="links">
      <div class="social">
        <div class="icon">
          <a href="{gitHubUrl}" target="_blank">
            <i class="fa-brands fa-linkedin-in fa-beat fa-xl"></i>
          </a>
        </div>
        <div class="social-info">
          <div class="name">
            Vitalii Stefanchak
          </div>
          <div class="url">
            <a class="blue-text" href="{linkedInUrl}" target="_blank">{linkedInDomain}</a>
          </div>
        </div>
      </div>
      <div class="social">
        <div class="icon">
          <a href="{gitHubUrl}" target="_blank">
            <i class="fa-brands fa-github fa-beat fa-xl"></i>
          </a>
        </div>
        <div class="social-info">
          <div class="name">
            Ste Vi
          </div>
          <div class="url">
            <a class="blue-text" href="{gitHubUrl}" target="_blank">{gutHubDomain}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="email">
      <div class="header">Send an e-mail</div>
      <form action="/" method="POST" use:enhance>
        <input name="name" placeholder="name">
        <input name="email" placeholder="your email">
        <input name="subject" placeholder="subject">
        <textarea name="message" placeholder="message" />
        <button type="submit" class="send-btn">submit</button>
      </form>
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
        background: rgb(26, 18, 112);
        background: linear-gradient(0deg, rgba(26, 18, 112, 1) 21%, rgba(20, 16, 65, 1) 85%);
        mix-blend-mode: darken;
        justify-content: center;
        align-items: flex-start;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding-top: 8rem;
        gap: 4rem;
    }

    .email {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 60vh;
        width: 32%;
        padding: 2rem 1rem;
        margin-left: 2rem;
        border-radius: 1.2rem;
        background: rgb(90, 87, 238, 0.17);
    }

    .header {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 90%;
        padding: 1rem;
    }

    input,
    textarea {
        background: transparent;
        color: white;
        margin-bottom: 3rem;
        padding: 2px;
        border: transparent;
        border-bottom: white 1px solid;
    }

    textarea {
        resize: none;
        height: 16vh;
    }

    input:focus,
    textarea:focus {
        outline: none;
    }

    input::placeholder,
    textarea::placeholder {
        color: white;
    }

    .send-btn {
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;
        width: 10rem;
        padding: 0.62rem 2rem;
        border-radius: 12px;
        color: white;
        background-color: #2B28B5;
        border: 1px solid #2e2ac1;
        font-size: 1.1rem;
        cursor: pointer;
    }

    .send-btn:hover {
        background-color: #2e2ac5;
        border: 1px solid #2e2ac1;
    }

    .send-btn:active {
        background-color: #1d1a9f;
    }

    .links {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
        height: 60vh;
        width: 30%;
    }

    .social {
        width: 100%;
        background: rgb(90, 87, 238, 0.17);
        display: flex;
        flex-direction: row;
        padding: 2rem 1.4rem;
        justify-content: flex-start;
        align-items: start;
        border-radius: 1.2rem;
        margin-bottom: 2rem;
        gap: 1rem;
    }

    .social:hover {
        background: rgb(90, 87, 238, 0.20);
        border: 1px solid rgb(90, 87, 238, 0.2);
    }

    .social:active {
        background-color: rgb(90, 87, 238, 0.50);
        border: 2px solid rgb(90, 87, 238, 0.50);
    }

    .icon {
        align-self: center;
        padding: 1rem;
        border-radius: 16px;
        width: fit-content;
        height: fit-content;
        background-color: #1d1559;
    }

    .name {
        padding-bottom: 0.8rem;
    }

    a {
        color: white;
        cursor: pointer;
    }

    .blue-text {
        color: #628EFF;
    }


</style>