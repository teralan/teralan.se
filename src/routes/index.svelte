<script>
import { fade } from "svelte/transition"
import { homePage } from "../stores/site"
import Page from "$components/layout/page.svelte"
import Divider from "$components/layout/divider.svelte"
import Button from "$components/button.svelte"
import Logo from "$components/logo.svelte"
</script>

<svelte:head>
  <title>Teralan - LAN 🕹 Turneringar</title>
</svelte:head>

<Page intro={false}>
  <span class="mx-auto w-24 md:w-32" in:fade={{ duration: 1000 }}>
    <Logo image={$homePage.logo} />
  </span>
  <Divider />
  <div class="landing_leading" in:fade={{ duration: 1000 }}>
    <h1>{$homePage.intro.title}</h1>
    <p>
      {$homePage.intro.paragraph}
    </p>
    <div class="buttons">
      <a href="/member" class="mb-4 mr-4">
        <Button color="blue">
          <span>💳</span>
          <span class="pl-2 pr-4">{$homePage.joinButtonText}</span>
        </Button>
      </a>
      <a href="/events">
        <Button color="orange">
          <span>📅</span>
          <span class="pl-2 pr-4">{$homePage.eventsButtonText}</span>
        </Button>
      </a>
    </div>
  </div>
</Page>

<style scoped>
.landing_leading {
  @apply flex flex-col mx-auto;
  @apply text-left;
}
.landing_leading h1 {
  @apply text-2xl md:text-5xl max-w-xl;
  @apply font-bold;
}
.landing_leading p {
  @apply max-w-md;
  @apply mt-4 md:my-6;
  @apply d text-lg md:text-xl text-gray-400;
}
.landing_leading .buttons {
  @apply flex flex-row flex-wrap;
  @apply text-lg md:text-2xl;
  @apply mt-6 md:mt-12;
}
.bg {
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  @apply absolute top-0 w-full h-full;
}
.bg::before {
  content: "";
  position: absolute;
  background: linear-gradient(0deg, rgba(1, 1, 1, 0.9) 30%, rgba(1, 1, 1, 0.8) 100%);
  width: 100%;
  height: 100%;
  z-index: -2;
  left: 0;
  top: 0;
}
</style>
