<script lang="ts">
  import { closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";

  export let isOpen;
  export let title;
  export let message;

</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fade>
    <div class="contents">
      <h2>{title}</h2>
      <p>{message}</p>
      <div class="actions">
        <button on:click={closeModal}>OK</button>
      </div>
    </div>
  </div>
{/if}

<style>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .contents {
        min-width: 290px;
        border-radius: 6px;
        padding: 1rem;
        background: rgb(51, 38, 187);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        pointer-events: auto;
        box-shadow: 0 0 0 9999px #000000b0;
    }

    h2 {
        text-align: center;
        font-size: 24px;
    }

    p {
        text-align: center;
        margin-top: 16px;
        white-space: pre-line;
        line-height: 1.52;
    }

    .actions {
        margin-top: 24px;
        display: flex;
        justify-content: flex-end;
    }

    button {
        color: white;
        background-color: #2521f3;
        border: 1px solid #3330fa;
        padding: 0.5rem 1.4rem;
        border-radius: 12px;
        cursor: pointer;
        font-size: 1rem;
    }

    button:hover {
        background-color: #1713fc;
    }

</style>