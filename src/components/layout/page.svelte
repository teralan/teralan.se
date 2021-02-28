<script>
import { fade } from "svelte/transition"
import Divider from "@components/layout/divider.svelte"

export let title: string = "Title"
export let description: string = "Description"
export let divider: string = "* * *"
export let intro: boolean = true
</script>

<svelte:head>
  <title>{`${title}`}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="page">
  {#if intro}
    <div in:fade={{ duration: 1000 }} class="intro">
      <h1>{title}</h1>
      <Divider text={divider} />
      <p>
        {description}
      </p>
    </div>
  {/if}
  <slot />
</div>

<style scoped>
.page {
  @apply flex flex-col items-center justify-center;
  @apply mt-16 md:mt-24 px-8 mx-auto w-full;
  @apply text-white;
}
.page .intro {
  @apply flex flex-col items-center justify-center;
  @apply text-center w-full;
}
.page .intro h1 {
  @apply text-4xl md:text-6xl;
  @apply font-bold;
}
.page .intro p {
  @apply max-w-lg;
  @apply text-lg md:text-xl;
  @apply text-gray-400;
}
</style>
