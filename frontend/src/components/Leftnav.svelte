<script>
  let currentPage = 'home';
</script>

<section class="nav">
  <div class="text">
    {currentPage}
  </div>
  <div class="arrow">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 30" fill="none">
      <path
        d="M10.9393 29.0607C11.5251 29.6464 12.4749 29.6464 13.0607 29.0607L22.6066 19.5147C23.1924 18.9289 23.1924 17.9792 22.6066 17.3934C22.0208 16.8076 21.0711 16.8076 20.4853 17.3934L12 25.8787L3.51472 17.3934C2.92893 16.8076 1.97919 16.8076 1.3934 17.3934C0.807612 17.9792 0.807612 18.9289 1.3934 19.5147L10.9393 29.0607ZM10.5 2.90615e-09L10.5 28L13.5 28L13.5 -2.90615e-09L10.5 2.90615e-09Z"
        fill="#FFFDFD" />
    </svg>
  </div>
</section>

<style>
    .nav {
        height: 100vh;
        width: 16%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .text {
        text-align: center;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 10vh;
        flex-grow: 1;
        display: inline;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }

    .arrow {
        margin-bottom: 4vh;
    }
</style>