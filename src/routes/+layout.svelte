<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import '../app.css'
</script>

<svelte:head>
  <meta name="description" content="Error pages for kilic.dev" />
  <meta name="keywords" content="error" />
  <meta name="author" content="Cenk Kılıç <cenk@kilic.dev>" />
</svelte:head>

<div class="flex overflow-hidden flex-col w-screen h-screen min-h-full lg:justify-center app">
  <main>
    <slot />
  </main>

  <Footer />
</div>
