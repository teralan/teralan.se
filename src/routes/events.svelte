<script>
import { events } from "$stores/site"
import Background from "$components/background.svelte"
import Page from "$components/layout/page.svelte"
</script>

<svelte:head>
  <title>{`${$events.intro.title} - 🚩`}</title>
</svelte:head>

<Page
  title={$events.intro.title}
  description={$events.intro.paragraph}
  divider={"🎮(╹◡╹👍)"}>
  <div class="events">
    <span class="empty">
      <span class="title">{$events.emptyFallback.title}</span>
      <p>{$events.emptyFallback.paragraph}</p>
    </span>
  </div>
</Page>

<style>
.events {
  max-width: 924px;
  @apply max-w-3xl mx-auto mt-12 p-6 md:p-12;
  @apply bg-white rounded-xl shadow-lg;
}
.events .empty {
  @apply w-full h-full;
  @apply flex flex-col justify-center items-center;
  @apply text-black text-center;
}
.events .empty .title {
  @apply text-xl md:text-3xl mb-4;
  @apply font-bold;
}
.events .empty p {
  @apply text-base md:text-xl;
}
</style>
