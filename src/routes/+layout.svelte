<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import '../app.css'
</script>

<div class="flex overflow-hidden flex-col w-screen h-screen min-h-full lg:justify-center app">
  <main>
    <slot />
  </main>

  <Footer />
</div>
