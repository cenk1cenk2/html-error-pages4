<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import '../app.css'
</script>

<svelte:head>
  <script>
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  </script>
</svelte:head>

<div class="flex overflow-hidden flex-col w-screen h-screen min-h-full lg:justify-center app">
  <main>
    <slot />
  </main>
  <Footer />
</div>
