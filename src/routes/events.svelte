<script>
import Background from "$components/background.svelte"
import Page from "$components/layout/page.svelte"
import { eventsPage } from "../stores/site"
</script>

<svelte:head>
  <title>{`${$eventsPage.intro.title} - 🚩`}</title>
</svelte:head>

<Page title={$eventsPage.intro.title} description={$eventsPage.intro.paragraph}>
  <div class="events">
    <span class="empty">
      <span class="title">{$eventsPage.emptyFallback.title}</span>
      <p>{$eventsPage.emptyFallback.paragraph}</p>
    </span>
  </div>
</Page>

<style>
.events {
  max-width: 924px;
  @apply max-w-3xl mx-auto mt-12 w-full p-6 md:p-12;
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
