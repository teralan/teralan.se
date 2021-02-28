<script>
import { fade } from "svelte/transition"
import Page from "@components/layout/page.svelte"
import Divider from "@components/layout/divider.svelte"
import Button from "@components/button.svelte"
import Logo from "@components/logo.svelte"
</script>

<svelte:head>
  <title>Teralan - LAN Events</title>
</svelte:head>

<div class="bg" />
<Page intro={false}>
  <span class="mx-auto w-24 m:w-64 md:mt-8" in:fade={{ duration: 1000 }}>
    <Logo image={"./assets/img/logo.webp"} />
  </span>
  <Divider />
  <div class="landing_leading" in:fade={{ duration: 1000 }}>
    <h1>Brinner du för LAN <br /> lika mycket som oss?</h1>
    <p>
      Bli medlem i vår förening och få tillgång till flera förmåner som billigare
      biljettpriser och exklusiva event.
    </p>
    <div class="buttons">
      <a href="/membership" class="mb-4 mr-4">
        <Button color="blue">
          <span>💳</span>
          <span class="pl-2 pr-4"> Bli medlem </span>
        </Button>
      </a>
      <a href="/events">
        <Button color="orange">
          <span>📅</span>
          <span class="pl-2 pr-4"> Kommande event </span>
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
  @apply text-2xl md:text-6xl;
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
  background-image: url("assets/img/bg.webp");
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
