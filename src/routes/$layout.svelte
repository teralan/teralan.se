<script>
import "@styles/global.css"
import Header from "@components/layout/header.svelte"
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style>
.app {
  max-width: 100vw;
  @apply relative w-full overflow-hidden;
  @apply font-main bg-transparent;
}

main {
  min-height: 100vh;
  @apply w-full py-4 md:py-16;
}
</style>
