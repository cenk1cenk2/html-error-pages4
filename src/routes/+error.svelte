<script lang="ts">
  import { faHome, faRefresh, faEnvelope } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'

  import { page } from '$app/stores'
</script>

<svelte:head>
  <title>kilic.dev: {$page.status} - {$page.error.message}</title>
</svelte:head>

<div class="flex items-center pt-20 antialiased lg:items-center lg:pt-0 lg:pl-48 lg:my-0">
  <div
    class="mx-auto w-11/12 bg-gray-50 bg-opacity-90 rounded-xl border-2 border-gray-200 shadow-2xl transition duration-300 ease-in-out lg:max-w-3xl lg:border-4 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-9 lg:p-12">
      <div class="-mt-16 lg:relative lg:-left-64 lg:top-72 lg:mr-64 lg:-mt-96">
        <div class="error-code">
          <p class="flex place-items-center m-0 font-mono text-7xl font-extrabold text-red-500 lg:text-9xl">{$page.status}</p>
        </div>
      </div>
      <div class="lg:pl-48">
        <h1 class="pt-8 text-4xl font-bold leading-none text-center uppercase whitespace-nowrap lg:pt-0 text-primary-500 truncate">{$page.error.message}</h1>

        <div class="pt-3 mx-auto mt-12 border-b-2 opacity-50 lg:mx-0 border-primary-500" />

        <div class="flex flex-wrap justify-between items-center pb-16 mx-auto mt-12 w-4/5 text-5xl lg:pb-0">
          <a href="mailto:cenk@kilic.dev" class="action-button"><Fa icon={faEnvelope} /></a>
          <a href="https://kilic.dev" class="action-button"><Fa icon={faHome} /></a>
          {#if $page.error.from}
            <a href={$page.error.from} class="action-button"><Fa icon={faRefresh} /></a>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .error-code {
    @apply block mx-auto w-48 h-48 bg-gray-50 rounded-xl border-2 border-gray-200 shadow-xl transition duration-500 ease-in-out lg:mx-0 lg:w-96 lg:h-96 lg:border-4 dark:bg-gray-800 dark:border-gray-700;
    @apply bg-cover flex justify-center;
    background-image: url('$lib/assets/images/carli.png');
  }

  .action-button {
    @apply text-white;
    @apply transition-transform transform;
    @apply hover:scale-110 hover:text-primary-500;
  }
</style>
