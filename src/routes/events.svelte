<script>
import { fade } from "svelte/transition"
import Background from "@components/background.svelte"
import Page from "@components/layout/page.svelte"

const description = `Bli medlem i vår förening och få tillgång till flera
    förmåner som billigare biljettpriser och exklusiva event.`
</script>

<Background />

<Page title="Events" {description}>
  <div class="events">
    <span class="empty" in:fade={{ duration: 2000 }}>
      <span class="title"> Inga kommande event atm! </span>
      <p>Men håll utskick på sociala medier om uppdateringar!</p>
    </span>
  </div>
</Page>

<style>
.events {
  max-width: 924px;
  @apply container mx-auto mt-12 w-full p-12;
  @apply bg-white rounded-xl shadow-lg;
}
.events .empty {
  @apply w-full h-full;
  @apply flex flex-col justify-center items-center;
  @apply text-black text-center;
}
.events .empty .title {
  @apply text-xl md:text-3xl my-4;
  @apply font-bold;
}
.events .empty p {
  @apply text-base md:text-xl;
}
</style>
